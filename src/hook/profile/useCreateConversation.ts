import http from "@/libs/axios.base";
import { useAuthStore } from "@/libs/zustand/auth.zustand";
import { Conversation } from "@/types/conversation.type";
import { trycatchAxios } from "@/utils/funcs/trycatchAxios";
import { router } from "expo-router";

export default function useCreateConversation() {
  const state = useAuthStore((state) => state);
  const createConversation = async (
    endUserIdToCreateConversationWith: string
  ) => {
    return trycatchAxios(async () => {
      const result = await http.post<Conversation>(
        process.env.EXPO_PUBLIC_HTTP_ENDPOINT_BASE_CONVERSATION,
        { userIds: [state.endUser._id, endUserIdToCreateConversationWith] }
      );
      console.log(result.data);
      router.push("/conversation/" + result.data._id);

      return result;
    });
  };
  return { createConversation };
}
