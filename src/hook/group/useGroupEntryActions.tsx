import http from "@/libs/axios.base";
import { useAuthStore } from "@/libs/zustand/auth.zustand";
import { trycatchAxios } from "@/utils/funcs/trycatchAxios";
import toast from "@/utils/toast/toast";
import { router } from "expo-router";
import { useState } from "react";
import { createNotification } from "../notification/createNotificationHelper";
import { Group } from "@/types/group.type";

export default function useGroupEntryActions() {
  const endUser = useAuthStore((state) => state.endUser);
  const [requestSent, setRequestSent] = useState(false);
  const joinGroup = async (group: Group) => {
    await trycatchAxios(async () => {
      const result = await http.post("/group-member-requests", {
        groupId: group._id
      });
      await createNotification({
        subject: {
          _id: endUser._id,
          name: endUser.username,
          type: "enduser",
          image: endUser.avatar
        },
        verb: "group-member-request",
        directObject: {
          _id: group._id,
          type: "group",
          name: group.name,
          image: ""
        },
        indirectObject: {
          _id: group.endUserId,
          name: "",
          type: "enduser",
          image: ""
        },
        referenceLink: `group/${group._id}`
      });
      toast.success({
        message: "Join request sent",
        duration: 3000
      });
      setRequestSent(true);
      console.log(result);
      return result;
    });
    console.log("group" + group);
  };
  const leaveGroup = async (groupId: string) => {
    return trycatchAxios(async () => {
      const result = await http.delete(
        "group-members" + `/${groupId}/${endUser._id}`
      );
      toast.success({
        message: "Successfully leaved",
        duration: 3000
      });
      setRequestSent(false);
      console.log(result);
      router.push("/group/");
      return result;
    });
  };

  return { joinGroup, leaveGroup, requestSent };
}
