import { trycatchAxios } from "@/utils/funcs/trycatchAxios";
import http from "@/libs/axios.base";
import toast from "@/utils/toast/toast";

export default function useGroupOwnerMemberActions(groupId: string) {
  const kickMember = async (memberId: string) => {
    return trycatchAxios(async () => {
      const result = await http.delete(
        process.env.EXPO_PUBLIC_HTTP_ENDPOINT_BASE_GROUPMEMBER +
          `?endUserId${memberId}&groupId${groupId}`
      );
      toast.success({
        message: "Successfully leaved",
        duration: 3000
      });
      console.log(result);
      return result;
    });
  };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const banMember = async (memberId: string) => {};
  return { kickMember, banMember };
}
