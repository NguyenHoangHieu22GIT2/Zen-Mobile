import { fetcher } from "@/libs/swr/fetcher";
import { PostJson } from "@/types/post.type";
import useSWR from "swr";

export function useFetchRecommendationPost() {
  const { data, error, isLoading } = useSWR<PostJson[]>(
    process.env.EXPO_PUBLIC_HTTP_ENDPOINT_GET_RECOMMENDED_POST +
    "?limit=10&skip=0",
    fetcher
  );
  return { data, error, isLoading };
}
