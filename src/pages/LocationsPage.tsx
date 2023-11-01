import { useEffect } from "react";

import { useLocations } from "../hooks/useLocation";
import { ArrowUpButton } from "../components/ui/ArrowIconButtons";

import LoadingSpinner from "../components/ui/LoadingSpinner";
import FetchLoader from "../components/ui/FetchLoader";
import { LocationsList } from "../components/LocationsList";

export default function LocationsPage() {
  const {
    locations,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useLocations();

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;
      if (
        scrollTop + clientHeight >= scrollHeight - 10 &&
        !isFetchingNextPage &&
        hasNextPage
      ) {
        fetchNextPage();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

//   const handleScrollDown = () => {
//     window.scrollTo({
//       top: document.documentElement.scrollHeight,
//       behavior: "smooth",
//     });
//   };

  const handleScrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <ArrowUpButton onClick={handleScrollUp} />

      {isLoading && <LoadingSpinner />}

      <LocationsList locations={locations} />

      {isFetchingNextPage && <FetchLoader />}

      {error && <p>{(error as Error).message}</p>}
    </>
  );
}
