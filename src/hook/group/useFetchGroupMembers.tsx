import http from "@/libs/axios.base";
import { fetcher } from "@/libs/swr/fetcher";
import { GroupMember } from "@/types/group-member.type";
import { trycatchAxios } from "@/utils/funcs/trycatchAxios";
import useSWR, { MutatorOptions } from "swr";

export default function useFetchGroupMembers(groupId: string) {
  const { data, isLoading, mutate } = useSWR<GroupMember[]>(
    "/group-members/" + groupId + "?limit=1000&skip=0",
    fetcher
  );
  const deleteGroupMemberApi = async (memberId: string) => {
    const response = await trycatchAxios(() =>
      http.delete(`/group-members/${groupId}/${memberId}`)
    );
    console.log(groupId, memberId, "groupId, memberId");
    const deleted = response.data;
    return data.filter((groupMember) => groupMember._id !== deleted._id);
  };
  const deleteGroupMemberOptions = (
    memberId: string
  ): boolean | MutatorOptions => {
    return {
      optimisticData: data.filter(
        (groupMember) => groupMember._id !== memberId
      ),
      rollbackOnError: true,
      populateCache: true,
      revalidate: false
    };
  };
  const deleteGroupMember = async (memberId: string) => {
    await mutate(
      deleteGroupMemberApi(memberId),
      deleteGroupMemberOptions(memberId)
    );
  };
  return { data, isLoading, deleteGroupMember, mutate };
}
