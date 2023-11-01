import { useEffect } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";

import axios from "axios";

import { Location } from "../types/index";
import { useLocationsStore } from "../store/locationsStore";

type UseLocationsReturnType = {
  locations: Location[];
  error: unknown;
  isLoading: boolean;
  fetchNextPage: () => void;
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
};

export const useLocations = (): UseLocationsReturnType => {
  const fetchLocations = async ({ pageParam = 1 }) => {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/location?page=${pageParam}`
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
    queryKey: ["locations", "infinite"],
    queryFn: ({ pageParam = 1 }) => fetchLocations({ pageParam }),
    getNextPageParam: (lastPage) => lastPage.info.next?.split("=")[1],
    initialPageParam: 1,
  });

  const locations = data?.pages?.map((page) => page.results).flat() || [];

  useEffect(() => {
    fetchNextPage();
  }, [fetchNextPage]);

  useLocationsStore.setState({ locations });

  return {
    locations,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  };
};
