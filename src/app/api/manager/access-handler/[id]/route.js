import { auth0 } from "@/lib/auth0";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
  try {
    const { id: workerId } = await params;

    if (!workerId) {
      return NextResponse.json(
        { success: false, message: "Worker ID parameter is missing!" },
        { status: 400 },
      );
    }

    const session = await auth0.getSession(req);
    const user = session?.user;

    const dbUser = await prisma.user.findUnique({
      where: { email: user?.email },
    });

    if (!dbUser || dbUser.role !== "MANAGER") {
      return NextResponse.json(
        {
          success: false,
          message: "Access Denied! Only managers can access this endpoint.",
        },
        { status: 403 },
      );
    }

    const targetWorker = await prisma.user.findUnique({
      where: { id: workerId },
    });

    if (!targetWorker) {
      return NextResponse.json(
        { success: false, message: "Target worker node not found!" },
        { status: 404 },
      );
    }

    const nextAccessStatus =
      targetWorker.access === "GRANTED" ? "DENIED" : "GRANTED";

    const updatedWorker = await prisma.user.update({
      where: { id: workerId },
      data: { access: nextAccessStatus },
    });

    return NextResponse.json(
      {
        success: true,
        message: `Worker access successfully changed to ${nextAccessStatus}!`,
        updatedWorker,
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error..!!",
        error: error.message,
      },
      { status: 500 },
    );
  }
}
