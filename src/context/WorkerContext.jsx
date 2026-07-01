"use client";

import { createContext, useContext } from "react";
import { useWorker as useWorkerHook } from "@/hooks/useWorker";

const WorkerContext = createContext();

export const WorkerProvider = ({ children }) => {
  const value = useWorkerHook();
  return <WorkerContext.Provider value={value}>{children}</WorkerContext.Provider>;
};

export const useWorker = () => useContext(WorkerContext);
