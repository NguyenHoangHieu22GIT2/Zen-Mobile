import { fetcher } from "@/libs/swr/fetcher";
import { GroupMinimal } from "@/types/group.type";
import useSWRInfinite from "swr/dist/infinite";

const GROUP_PER_FETCH = 8;

export default function useFetchYourGroups() {
  const getKey = (pageIndex, previousPageData) => {
    console.log(pageIndex);
    //end of page?
    if (pageIndex && !previousPageData.length) return null;
    return (
      "yourgroup..." +
      `?limit=${pageIndex * GROUP_PER_FETCH + GROUP_PER_FETCH}&skip=${
        pageIndex * GROUP_PER_FETCH
      }`
    );
  };
  //data will be array of pages[[],[],[]], which means newly fetched data will be added to the array
  //size is number of pages
  const { data, mutate, size, setSize, isValidating, isLoading, error } =
    useSWRInfinite(getKey, fetcher, { initialSize: 1 });

  //concat all the pages together
  const groups: GroupMinimal[] = data ? [].concat(...data) : [];
  //joined? isMembber? isOwner?
  const isLoadingMore = isLoading;
  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.length < GROUP_PER_FETCH);
  const isRefreshing = isValidating && data && data.length === size;

  const fetchMoreGroup = () => {
    setSize(size + 1);
  };
  const refreshGroups = () => {
    mutate();
  };

  return {
    groups,
    error,
    isLoadingMore,
    isReachingEnd,
    isRefreshing,
    refreshGroups,
    fetchMoreGroup
  };
}
