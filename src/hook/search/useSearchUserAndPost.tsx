import { fetcher } from "@/libs/swr/fetcher";
import { EndUserSearchMinimal } from "@/types/enduser.type";
import { PostJson } from "@/types/post.type";
import { SearchResultType } from "@/types/search.type";
import { useEffect, useState } from "react";
import useSWR from "swr";

export default function useSearchUserAndPost() {
  const [searchInput, setSearchInput] = useState<string>("");
  const [searchType, setSearchType] = useState<SearchResultType>("people");
  const changeInput = (newInput: string) => {
    setSearchInput(newInput);
  };
  const changeSearchType = (newType: SearchResultType) => {
    setSearchType(newType);
  };
  const { data, isLoading, error, mutate } = useSWR<
    EndUserSearchMinimal[] | PostJson[]
  >(
    `${
      searchType == "people"
        ? "/endusers/search?search="
        : "/posts/search?searchKeyWords="
    }${searchInput}&limit=100&skip=0`,
    fetcher
  );
  useEffect(() => {
    console.log(data);
    mutate();
  }, [searchInput]);
  return {
    results: data,
    isLoading,
    error,
    searchInput,
    setSearchInput,
    changeInput,
    searchType,
    changeSearchType
  };
}
