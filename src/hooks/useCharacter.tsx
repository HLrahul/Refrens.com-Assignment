import { useEffect } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";

import axios from "axios";

import { Character } from "../types/index";

export const useCharacters = (searchQuery: string) => {
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

  const filteredCharacters = characters.filter((character: Character) =>
    character.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    fetchNextPage();
  }, [fetchNextPage]);

  return {
    characters: filteredCharacters,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  };
};
