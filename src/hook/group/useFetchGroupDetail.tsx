import { fetcher } from "@/libs/swr/fetcher";
import { GroupDetail } from "@/types/group.type";
import useSWR from "swr";

export default function useFetchGroupDetail(groupId: string) {
  const { data, isLoading } = useSWR<GroupDetail>("" + `/${groupId}`, fetcher);
  return {
    data,
    isLoading
  };
}
