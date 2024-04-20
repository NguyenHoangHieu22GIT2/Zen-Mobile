import { fetcher } from "@/libs/swr/fetcher";
import { Comment } from "@/types/comment.type";
import useSWR from "swr";

type props = {
  postId: string;
};

export function useFetchComments(props: props) {
  const { data, error, isLoading } = useSWR<Comment[]>(
    `/comments?limit=10&skip=0&postId=${props.postId}`,
    fetcher
  );
  return { data, error, isLoading };
}
