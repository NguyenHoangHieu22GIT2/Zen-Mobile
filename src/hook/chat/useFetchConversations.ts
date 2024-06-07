import { fetcher } from "@/libs/swr/fetcher";
import { Conversation } from "@/types/conversation.type";
import { useEffect } from "react";
import useSWR from "swr";

export default function useFetchConversations() {
  const { data, isLoading, error, mutate, isValidating } = useSWR<
    Conversation[]
  >("/conversation?limit=10&skip=0", fetcher);
  const refreshConversation = () => {
    mutate();
  };
  useEffect(() => {
    console.log(error);
    console.log(error);
  }, [error]);
  return { data, isLoading, refreshConversation, isRefreshing: isValidating };
}
