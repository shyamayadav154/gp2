"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";

const getAddressFromCoords = async (lat, lng) => {
  try {
    const res = await axios.get(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`,
    );
    return res?.data?.display_name;
  } catch (error) {
    console.log(error?.response?.data);
    return null;
  }
};

export const useWorker = () => {
  const queryClient = useQueryClient();

  const clockInMutation = useMutation({
    mutationFn: async (clockInInput) => {
      const locationName = await getAddressFromCoords(
        parseFloat(clockInInput.latitudeIn),
        parseFloat(clockInInput.longitudeIn),
      );
      const res = await axios.post("/api/worker/clock-in", { ...clockInInput, locationName });
      return res.data;
    },
    onSuccess: (data) => {
      toast.success(data?.message || "Clocked In successfully!");
      queryClient.invalidateQueries({ queryKey: ["worker-details"] });
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message || "Clock In failed");
    },
  });

  const clockOutMutation = useMutation({
    mutationFn: async (clockOutInput) => {
      const locationName = await getAddressFromCoords(
        parseFloat(clockOutInput.latitudeOut),
        parseFloat(clockOutInput.longitudeOut),
      );
      const res = await axios.post("/api/worker/clock-out", { ...clockOutInput, locationName });
      return res.data;
    },
    onSuccess: (data) => {
      toast.success(data?.message || "Clocked Out successfully!");
      queryClient.invalidateQueries({ queryKey: ["worker-details"] });
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message || "Clock Out failed");
    },
  });

  const { data: workerData, isLoading: workerLoading } = useQuery({
    queryKey: ["worker-details"],
    queryFn: async () => {
      const res = await axios.get("/api/worker/worker-details");
      return res.data;
    },
  });

  const updateDetailsMutation = useMutation({
    mutationFn: async (details) => {
      const res = await axios.post("/api/worker/update-details", details);
      return res.data;
    },
    onSuccess: (data) => {
      toast.success(data?.message || "Details updated successfully..!!");
      queryClient.invalidateQueries({ queryKey: ["worker-details"] });
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message || "Update failed..!!");
    },
  });

  const updateImageMutation = useMutation({
    mutationFn: async (formData) => {
      const res = await axios.put("/api/worker/update-image", formData);
      return res.data;
    },
    onSuccess: (data) => {
      toast.success(data?.message || "Profile Image updated successfully..!!");
      queryClient.invalidateQueries({ queryKey: ["worker-details"] });
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message || "Image upload failed..!!");
      console.log(error);
    },
  });

  const { data: activeZoneData, isLoading: activeZoneLoading } = useQuery({
    queryKey: ["active-zone"],
    queryFn: async () => {
      const res = await axios.get("/api/worker/active-zone");
      return res.data;
    },
  });

  return {
    punchClockIn: (input, options) => clockInMutation.mutate(input, options),
    isClockingIn: clockInMutation.isPending,
    punchClockOut: (output, options) => clockOutMutation.mutate(output, options),
    isClockingOut: clockOutMutation.isPending,
    userData: workerData?.dbUser || null,
    shiftDetails: workerData?.shiftDetails || [],
    workerLoading,
    updateWorkerDetails: (details, options) => updateDetailsMutation.mutate(details, options),
    isSavingDetails: updateDetailsMutation.isPending,
    updateProfileImage: (formData, options) => updateImageMutation.mutate(formData, options),
    isUploadingImage: updateImageMutation.isPending,
    activeLocation: activeZoneData?.activeLocation || null,
    activeZoneLoading,
  };
};
