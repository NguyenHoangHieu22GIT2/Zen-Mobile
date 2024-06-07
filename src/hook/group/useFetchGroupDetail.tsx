import { fetcher } from "@/libs/swr/fetcher";
import { useAuthStore } from "@/libs/zustand/auth.zustand";
import { GroupDetail } from "@/types/group.type";
import { useEffect, useState } from "react";
import useSWR from "swr";

export default function useFetchGroupDetail(groupId: string) {
  const myEndUser = useAuthStore((state) => state.endUser);
  const [isOwner, setIsOwner] = useState(false);
  const { data, isLoading, error } = useSWR<GroupDetail>(
    "/groups" + `/${groupId}`,
    fetcher
  );
  useEffect(() => {
    if (data) {
      setIsOwner(data.group.endUserId === myEndUser._id);
    }
    console.log("detail", data);
  }, [data]);
  return {
    data,
    isLoading,
    error,
    isOwner
  };
}
