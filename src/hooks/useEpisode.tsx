import { useEffect } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import { Episode } from "../types/index";
import { useEpisodesStore } from "../store/episodesStore";

type UseEpisodesReturnType = {
  episodes: Episode[];
  error: unknown;
  isLoading: boolean;
  fetchNextPage: () => void;
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
};

export const useEpisodes = (): UseEpisodesReturnType => {
  const fetchEpisodes = async ({ pageParam = 1 }) => {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/episode?page=${pageParam}`
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
    queryKey: ["episodes", "infinite"],
    queryFn: ({ pageParam = 1 }) => fetchEpisodes({ pageParam }),
    getNextPageParam: (lastPage) => lastPage.info.next?.split("=")[1],
    initialPageParam: 1,
  });

  const episodes = data?.pages?.map((page) => page.results).flat() || [];

  useEffect(() => {
    fetchNextPage();
  }, [fetchNextPage]);

  useEpisodesStore.setState({ episodes });

  return {
    episodes,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  };
};
