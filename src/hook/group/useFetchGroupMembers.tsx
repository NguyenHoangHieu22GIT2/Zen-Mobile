import { fetcher } from "@/libs/swr/fetcher";
import { GroupMember } from "@/types/group-member.type";
import useSWR from "swr";

export default function useFetchGroupMembers(groupId: string) {
  const { data, isLoading } = useSWR<GroupMember[]>(
    process.env.EXPO_PUBLIC_HTTP_ENDPOINT_BASE_GROUPMEMBER + `/${groupId}`,
    fetcher
  );
  return { data, isLoading };
}
