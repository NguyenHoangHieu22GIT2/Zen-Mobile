import { fetcher } from "@/libs/swr/fetcher";
import { GroupDetail } from "@/types/group.type";
import useSWR from "swr";

export default function useFetchGroupDetail(groupId: string) {
  const { data, isLoading } = useSWR<GroupDetail>(
    process.env.EXPO_PUBLIC_HTTP_ENDPOINT_GET_GROUP_DETAIL + `/${groupId}`,
    fetcher
  );
  return {
    data,
    isLoading
  };
}
