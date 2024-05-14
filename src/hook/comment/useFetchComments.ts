import { fetcher } from "@/libs/swr/fetcher";
import { Comment } from "@/types/comment.type";
import useSWRInfinite from "swr/dist/infinite";

type props = {
  postId: string;
};

const COMMENT_PER_FETCH = 8;

export function useFetchComments(props: props) {
  const getKey = (pageIndex, previousPageData) => {
    console.log(pageIndex);
    //end of page?
    if (pageIndex && !previousPageData.length) return null;
    return `/comment?limit=${
      pageIndex * COMMENT_PER_FETCH + COMMENT_PER_FETCH
    }&skip=${pageIndex * COMMENT_PER_FETCH}&postId=${props.postId}`;
  };

  //data will be array of pages[[],[],[]], which means newly fetched data will be added to the array
  //size is number of pages
  const { data, mutate, size, setSize, isValidating, isLoading, error } =
    useSWRInfinite(getKey, fetcher, { initialSize: 1 });

  //concat all the pages together
  const comments: Comment[] = data ? [].concat(...data) : [];
  console.log(data);
  const isLoadingMore =
    isLoading || (size > 0 && data && typeof data[size - 1] === "undefined");
  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.length < COMMENT_PER_FETCH);
  const isRefreshing = isValidating && data && data.length === size;

  const fetchMoreComments = () => {
    setSize(size + 1);
  };
  const refreshComments = () => {
    mutate();
  };

  const addComment = (newComment: Comment) => {
    mutate([...comments, newComment], { revalidate: false });
  };

  return {
    error,
    comments,
    addComment,
    mutate,
    refreshComments,
    isRefreshing,
    isReachingEnd,
    isLoadingMore,
    fetchMoreComments
  };
}
