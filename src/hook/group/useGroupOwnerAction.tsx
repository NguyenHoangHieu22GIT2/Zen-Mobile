import { trycatchAxios } from "@/utils/funcs/trycatchAxios";
import useEditGroup from "./useEditGroup";
import http from "@/libs/axios.base";
import toast from "@/utils/toast/toast";

export default function useGroupOwnerAction(groupId: string) {
  const kickMember = async (memberId: string) => {
    return trycatchAxios(async () => {
      const result = await http.delete(
        `group-members?endUserId${memberId}&groupId${groupId}`
      );
      toast.success({
        message: "Successfully leaved",
        duration: 3000
      });
      console.log(result);
      return result;
    });
  };
  const deleteMemberPost = async (postId: string) => {};
  const { submitEditGroup } = useEditGroup(groupId);
  return { kickMember, deleteMemberPost, submitEditGroup };
}
