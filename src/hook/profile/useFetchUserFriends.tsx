import http from "@/libs/axios.base";
import { fetcher } from "@/libs/swr/fetcher";
import { EndUserFriend } from "@/types/friend.type";
import { trycatchAxios } from "@/utils/funcs/trycatchAxios";
import useSWR from "swr";

export default function useFetchUserFriends(endUserId: string) {
  const { data, error, isLoading, mutate } = useSWR<EndUserFriend[]>(
    "/friend/" + endUserId + "?limit=100&skip=0",
    fetcher
  );

  const removeFriend = async (friendId: string) => {
    try {
      await trycatchAxios(async () => {
        return http.put(`/friend-system/remove-friend`, {
          endUserId: friendId
        });
      });
      await mutate();
    } catch (er) {
      console.log(er);
    }
  };

  return {
    friends: data && data.length > 0 ? data[0]?.friends.flat() : [],
    error,
    isLoading,
    mutate,
    removeFriend
  };
}
