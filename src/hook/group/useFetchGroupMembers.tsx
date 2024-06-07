import { fetcher } from "@/libs/swr/fetcher";
import { GroupMember } from "@/types/group-member.type";
import useSWR from "swr";

export default function useFetchGroupMembers(groupId: string) {
  const { data, isLoading } = useSWR<GroupMember[]>(
    "/group-members" + `/${groupId}`,
    fetcher
  );
  return { data, isLoading };
}
