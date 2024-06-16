import http from "@/libs/axios.base";
import { trycatchAxios } from "@/utils/funcs/trycatchAxios";
import toast from "@/utils/toast/toast";
import { useState } from "react";
import { createNotification } from "../notification/createNotificationHelper";
import { useAuthStore } from "@/libs/zustand/auth.zustand";
import { EndUser } from "@/types/enduser.type";

export default function useAddFriend() {
  const [friendRequestSent, setFriendRequestSent] = useState(false);
  const myEndUser = useAuthStore((state) => state.endUser);
  const addFriend = async (endUser: EndUser) => {
    await trycatchAxios(async () => {
      const friendRequest = await http.post(
        `/friend-system/create-friend-request`,
        { endUserId: endUser._id }
      );
      await createNotification({
        subject: {
          _id: myEndUser._id,
          name: myEndUser.username,
          type: "enduser",
          image: myEndUser.avatar
        },
        verb: "friend-request",
        indirectObject: {
          _id: endUser._id,
          name: endUser.username,
          type: "enduser",
          image: endUser.avatar
        },
        referenceLink: `profile/${endUser._id}`
      });
      toast.success({ message: "Friend request sent!" });
      setFriendRequestSent(true);
      return friendRequest;
    });
  };
  return { addFriend, friendRequestSent };
}
