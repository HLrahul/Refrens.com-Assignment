import { useEffect } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";

import axios from "axios";

import { Character } from "../types/index";

type UseCharactersReturnType = {
  characters: Character[];
  error: unknown;
  isLoading: boolean;
  fetchNextPage: () => void;
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
};

type FilterProps = {
  status: string;
  location: string;
  episode: string;
  gender: string;
  species: string;
  type: string;
};

export const useCharacters = (
  searchQuery: string,
  filter: FilterProps
): UseCharactersReturnType => {
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

  const filteredCharacters = characters
    .filter((character: Character) =>
      character.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((character: Character) => {
      const { status, location, episode, gender, species, type } = filter;
      return (
        (status === "" || character.status === status) &&
        (location === "" || character.location.name === location) &&
        (episode === "" || character.episode.includes(episode)) &&
        (gender === "" || character.gender === gender) &&
        (species === "" || character.species === species) &&
        (type === "" || character.type === type)
      );
    });

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
