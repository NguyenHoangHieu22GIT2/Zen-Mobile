import { fetcher } from "@/libs/swr/fetcher";
import { EndUserSearchMinimal } from "@/types/enduser.type";
import { PostJson } from "@/types/post.type";
import { SearchResultType } from "@/types/search.type";
import { useEffect, useState } from "react";
import useSWR from "swr";

export default function useSearchUserAndPost() {
  const [results, setResults] = useState<EndUserSearchMinimal[] | PostJson[]>(
    []
  );
  const [searchInput, setSearchInput] = useState<string>("");
  const [searchType, setSearchType] = useState<SearchResultType>("people");
  const changeInput = (newInput: string) => {
    setSearchInput(newInput);
  };
  const changeSearchType = (newType: SearchResultType) => {
    setSearchType(newType);
  };
  const { data, isLoading, error } = useSWR<
    EndUserSearchMinimal[] | PostJson[]
  >(
    `${searchType == "people" ? "/endusers" : "/posts"}?search=${searchInput}`,
    fetcher
  );
  useEffect(() => {
    if (searchInput == "") {
      setResults([]);
      return;
    }
    setResults(data);
  }, [data]);
  return {
    results,
    isLoading,
    error,
    searchInput,
    setSearchInput,
    changeInput,
    searchType,
    changeSearchType
  };
}
