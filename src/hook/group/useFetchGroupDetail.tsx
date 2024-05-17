import { fetcher } from "@/libs/swr/fetcher";
import { GroupDetail } from "@/types/group.type";
import useSWR from "swr";

export default function useFetchGroupDetail(groupId: string) {
  const { data, isLoading, error } = useSWR<GroupDetail>(
    process.env.EXPO_PUBLIC_HTTP_ENDPOINT_BASE_GROUP + `/${groupId}`,
    fetcher
  );
  return {
    data,
    isLoading,
    error
  };
}
