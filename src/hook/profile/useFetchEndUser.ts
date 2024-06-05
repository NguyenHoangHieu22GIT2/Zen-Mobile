import { fetcher } from "@/libs/swr/fetcher";
import { EndUser } from "@/types/enduser.type";
import useSWR from "swr";

export default function useFetchEndUser(endUserId: string) {
  const { data, isLoading, error } = useSWR<EndUser>(
    "/endusers/" + endUserId,
    fetcher,
    { refreshInterval: 2000 }
  );

  return { endUser: data, isLoading, error };
}
