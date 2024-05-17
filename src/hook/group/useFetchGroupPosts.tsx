import { fetcher } from "@/libs/swr/fetcher";
import { PostJson } from "@/types/post.type";
import useSWRInfinite from "swr/dist/infinite";

const POST_PER_FETCH = 5;

export default function useFetchGroupPosts(groupId: string) {
  const getKey = (pageIndex, previousPageData) => {
    console.log(pageIndex);
    //end of page?
    if (pageIndex && !previousPageData.length) return null;
    return (
      process.env.EXPO_PUBLIC_HTTP_ENDPOINT_BASE_GROUPPOST +
      `?limit=${pageIndex * POST_PER_FETCH + POST_PER_FETCH}&skip=${
        pageIndex * POST_PER_FETCH
      }&groupId=${groupId}`
    );
  };
  //data will be array of pages[[],[],[]], which means newly fetched data will be added to the array
  //size is number of pages
  const { data, mutate, size, setSize, isValidating, isLoading, error } =
    useSWRInfinite(getKey, fetcher, { initialSize: 1 });

  //concat all the pages together
  const posts: PostJson[] = data ? [].concat(...data) : [];
  const isLoadingMore = isLoading;
  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.length < POST_PER_FETCH);
  const isRefreshing = isValidating && data && data.length === size;

  const fetchMorePost = () => {
    setSize(size + 1);
  };
  const refreshPosts = () => {
    mutate();
  };

  return {
    posts,
    error,
    isLoadingMore,
    isReachingEnd,
    isRefreshing,
    refreshPosts,
    fetchMorePost
  };
}
