import http from "@/libs/axios.base";
import { fetcher } from "@/libs/swr/fetcher";
import { FriendRequest } from "@/types/friend-request.type";
import { trycatchAxios } from "@/utils/funcs/trycatchAxios";
import toast from "@/utils/toast/toast";
import useSWR, { MutatorOptions } from "swr";

export default function useFriendRequestController() {
  const {
    data: friendRequests,
    isLoading,
    error,
    mutate
  } = useSWR<FriendRequest[]>("/friend-request?limit=100&skip=0", fetcher);

  const acceptFriendRequestApi = async (friendRequestId: string) => {
    const response = await trycatchAxios(() =>
      http.patch(`/friend-system/accept-friend-request`, { friendRequestId })
    );
    const edited = response.data;
    console.log(edited._id);
    return friendRequests.filter(
      (friendRequest) => friendRequest._id !== edited._id
    );
  };

  const declineFriendRequestApi = async (friendRequestId: string) => {
    const response = await trycatchAxios(() =>
      http.patch(`/friend-request/decline-friend-request`, { friendRequestId })
    );
    const edited = response.data;
    console.log(edited._id);
    return friendRequests.filter(
      (friendRequest) => friendRequest._id !== edited._id
    );
  };

  const acceptFriendRequestOptions = (
    friendRequestId: string
  ): boolean | MutatorOptions => {
    return {
      optimisticData: friendRequests.filter(
        (friendRequest) => friendRequest._id !== friendRequestId
      ),
      rollbackOnError: true,
      populateCache: true,
      revalidate: false
    };
  };

  const declineFriendRequestOptions = (
    friendRequestId: string
  ): boolean | MutatorOptions => {
    return {
      optimisticData: friendRequests.filter(
        (friendRequest) => friendRequest._id !== friendRequestId
      ),
      rollbackOnError: true,
      populateCache: true,
      revalidate: false
    };
  };

  const acceptFriendRequest = async (friendRequestId: string) => {
    try {
      await mutate(
        acceptFriendRequestApi(friendRequestId),
        acceptFriendRequestOptions(friendRequestId)
      );
      toast.success({ message: "Friend request accepted" });
    } catch (error) {
      console.log(error);
    }
  };

  const declineFriendRequest = async (friendRequestId: string) => {
    try {
      await mutate(
        declineFriendRequestApi(friendRequestId),
        declineFriendRequestOptions(friendRequestId)
      );
      toast.success({ message: "Friend request declined" });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    friendRequests,
    isLoading,
    error,
    mutate,
    acceptFriendRequest,
    declineFriendRequest
  };
}
