import http from "@/libs/axios.base";
import { trycatchAxios } from "@/utils/funcs/trycatchAxios";
import toast from "@/utils/toast/toast";
import { router } from "expo-router";

export default function useGroupEntryActions() {
  const joinGroup = async (groupId: string) => {
    return trycatchAxios(async () => {
      const result = await http.post(`group-members`, { groupId });
      toast.success({
        message: "Successfully joined",
        duration: 3000
      });
      console.log(result);
      return result;
    });
  };
  const leaveGroup = async (groupId: string) => {
    return trycatchAxios(async () => {
      const result = await http.delete(`group-members?groupId${groupId}`);
      toast.success({
        message: "Successfully leaved",
        duration: 3000
      });
      console.log(result);
      router.push("/group/");
      return result;
    });
  };

  return { joinGroup, leaveGroup };
}
