import { fetcher } from "@/libs/swr/fetcher";
import { useAuthStore } from "@/libs/zustand/auth.zustand";
import { EndUser } from "@/types/enduser.type";
import { useState } from "react";
import useSWR from "swr";

export default function useFetchEndUser(endUserId: string) {
  const myEndUser = useAuthStore((state) => state.endUser);
  const [isMyProfile] = useState(endUserId == myEndUser._id);
  if (isMyProfile) {
    const { data, isLoading, error, mutate } = useSWR<EndUser>(
      "/endusers/" + endUserId,
      fetcher,
      { refreshInterval: 2000 }
    );
    return { endUser: data, isLoading, error, isMyProfile, mutate };
  }

  return {
    endUser: myEndUser,
    isLoading: false,
    error: false,
    isMyProfile,
    mutate: () => {}
  };
}
