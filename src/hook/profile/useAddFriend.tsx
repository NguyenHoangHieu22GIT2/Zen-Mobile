import http from "@/libs/axios.base";
import { trycatchAxios } from "@/utils/funcs/trycatchAxios";
import toast from "@/utils/toast/toast";
import axios from "axios";

export default function useAddFriend() {
  const addFriend = async (endUserId: string) => {
    return trycatchAxios(async () => {
      const friendRequest = await http.post(
        `/friend-system/create-friend-request`,
        { endUserId }
      );
      toast.success({ message: "Friend request sent!" });
      return friendRequest;
    });
  };
  return { addFriend };
}
