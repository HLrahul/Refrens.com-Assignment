import { useEffect } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";

import axios from "axios";

import { Character } from "../types/index";
import { useCharactersStore } from "../store/charactersStore";

type UseCharactersReturnType = {
  characters: Character[];
  error: unknown;
  isLoading: boolean;
  fetchNextPage: () => void;
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
};

export const useCharacters = (): UseCharactersReturnType => {

  const fetchCharacters = async ({ pageParam = 1 }) => {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character?page=${pageParam}`
    );
    return response.data;
  };

  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["characters", "infinite"],
    queryFn: ({ pageParam = 1 }) => fetchCharacters({ pageParam }),
    getNextPageParam: (lastPage) => lastPage.info.next?.split("=")[1],
    initialPageParam: 1,
  });

  const characters = data?.pages?.map((page) => page.results).flat() || [];

  useEffect(() => {
    fetchNextPage();
  }, [fetchNextPage]);

  useCharactersStore.setState({ characters });

  return {
    characters,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  };
};
