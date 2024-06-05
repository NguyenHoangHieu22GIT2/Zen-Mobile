import { fetcher } from "@/libs/swr/fetcher";
import { Notification } from "@/types/notification.type";
import useSWRInfinite from "swr/dist/infinite";

const NOTIFICATION_PER_FETCH = 15;
export default function useFetchNotifications() {
  const getKey = (pageIndex, previousPageData) => {
    console.log(pageIndex);
    //end of page?
    if (pageIndex && !previousPageData.length) return null;
    return (
      "/notification" +
      `?limit=${
        pageIndex * NOTIFICATION_PER_FETCH + NOTIFICATION_PER_FETCH
      }&skip=${pageIndex * NOTIFICATION_PER_FETCH}`
    );
  };
  //data will be array of pages[[],[],[]], which means newly fetched data will be added to the array
  //size is number of pages
  const { data, mutate, size, setSize, isValidating, isLoading, error } =
    useSWRInfinite(getKey, fetcher, { initialSize: 1, refreshInterval: 10000 });

  //concat all the pages together
  const notifications: Notification[] = data ? [].concat(...data) : [];
  const isLoadingMore = isLoading;
  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.length < NOTIFICATION_PER_FETCH);
  const isRefreshing = isValidating && data && data.length === size;

  const fetchMoreNotifications = () => {
    if (isLoadingMore) return;
    setSize(size + 1);
  };
  const refreshNotifications = () => {
    mutate();
  };

  return {
    notifications,
    error,
    isLoadingMore,
    isReachingEnd,
    isRefreshing,
    refreshNotifications,
    fetchMoreNotifications
  };
}
