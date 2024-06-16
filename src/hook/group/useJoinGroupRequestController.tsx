import http from "@/libs/axios.base";
import { fetcher } from "@/libs/swr/fetcher";
import { JoinGroupRequest } from "@/types/group-request.type";
import { trycatchAxios } from "@/utils/funcs/trycatchAxios";
import toast from "@/utils/toast/toast";
import useSWR, { MutatorOptions } from "swr";

export default function useJoinGroupRequestController(groupId: string) {
  const {
    data: joinGroupRequests,
    isLoading,
    error,
    mutate
  } = useSWR<JoinGroupRequest[]>(
    `/group-member-requests/${groupId}?limit=100&skip=0`,
    fetcher
  );

  const acceptJoinGroupRequestApi = async (endUserId: string) => {
    const response = await trycatchAxios(() =>
      http.patch(`/group-member-requests/accept`, { endUserId, groupId })
    );
    const edited = response.data;
    console.log(edited._id);
    return joinGroupRequests.filter(
      (joinGroupRequest) => joinGroupRequest._id !== edited._id
    );
  };

  const declineJoinGroupRequestApi = async (endUserId: string) => {
    const response = await trycatchAxios(() =>
      http.patch(`/group-member-requests/decline`, {
        endUserId,
        groupId
      })
    );
    const edited = response.data;
    console.log(edited._id);
    return joinGroupRequests.filter(
      (joinGroupRequest) => joinGroupRequest._id !== edited._id
    );
  };

  const acceptJoinGroupRequestOptions = (
    endUserId: string
  ): boolean | MutatorOptions => {
    return {
      optimisticData: joinGroupRequests.filter(
        (joinGroupRequest) => joinGroupRequest._id !== endUserId
      ),
      rollbackOnError: true,
      populateCache: true,
      revalidate: false
    };
  };

  const declineJoinGroupRequestOptions = (
    joinGroupRequestId: string
  ): boolean | MutatorOptions => {
    return {
      optimisticData: joinGroupRequests.filter(
        (joinGroupRequest) => joinGroupRequest._id !== joinGroupRequestId
      ),
      rollbackOnError: true,
      populateCache: true,
      revalidate: false
    };
  };

  const acceptJoinGroupRequest = async (joinGroupRequestId: string) => {
    try {
      await mutate(
        acceptJoinGroupRequestApi(joinGroupRequestId),
        acceptJoinGroupRequestOptions(joinGroupRequestId)
      );
      toast.success({ message: "Friend request accepted" });
    } catch (error) {
      console.log(error);
    }
  };

  const declineJoinGroupRequest = async (joinGroupRequestId: string) => {
    try {
      await mutate(
        declineJoinGroupRequestApi(joinGroupRequestId),
        declineJoinGroupRequestOptions(joinGroupRequestId)
      );
      toast.success({ message: "Friend request declined" });
    } catch (error) {
      console.log(error);
    }
  };
  return {
    joinGroupRequests,
    isLoading,
    error,
    acceptJoinGroupRequest,
    declineJoinGroupRequest
  };
}
