import { fetcher } from "@/libs/swr/fetcher";
import { PostJson } from "@/types/post.type";
import { useEffect, useState } from "react";
import useSWR from "swr";

const POSTS_PER_FETCH = 8;

export function useFetchRecommendationPost() {
  const [posts, setPosts] = useState<PostJson[]>([]);
  const [{ limit, skip }, setFetchParams] = useState({
    limit: POSTS_PER_FETCH,
    skip: 0
  });
  const updateFetchParams = (newLimit: number, newSkip: number) => {
    setFetchParams({ limit: newLimit, skip: newSkip });
  };

  const { data, error, isLoading, mutate } = useSWR(
    () =>
      process.env.EXPO_PUBLIC_HTTP_ENDPOINT_GET_RECOMMENDED_POST +
      `?limit=${limit}&skip=${skip}`,
    fetcher
  );

  const fetchMorePosts = () => {
    updateFetchParams(posts.length + POSTS_PER_FETCH, posts.length);
  };
  const fetchParamsIsEqualToInitial = limit === POSTS_PER_FETCH && skip === 0;
  const refreshPosts = () => {
    if (fetchParamsIsEqualToInitial) {
      mutate();
    } else {
      updateFetchParams(POSTS_PER_FETCH, 0);
    }
  };

  useEffect(() => {
    //alternative for if refresh is trigged
    if (fetchParamsIsEqualToInitial) {
      console.log("limit and skip got reset");
      setPosts([]);
    }
    if (data && data.length !== 0) {
      setPosts((prevPosts) => [...prevPosts, ...data]);
    }
  }, [data]);

  return { posts, error, isLoading, refreshPosts, fetchMorePosts };
}
