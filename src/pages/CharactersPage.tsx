import { useEffect } from "react";

import { Container, Heading, Text, useBreakpointValue } from "@chakra-ui/react";

import { useSearchQueryStore } from "../store/searchQueryStore";
import {
  ConatinerStyles,
  HeadingStyles,
  TextStyles,
} from "../styles/CharactersPage.styles";

import { useCharacters } from "../hooks/useCharacter";

import CharactersList from "../components/CharacterList";
import CharactersError from "../components/CharactersError";
import CharactersLoader from "../components/CharactersLoader";
import CharacterFilters from "../components/CharacterFilters";
import CharacterFetchLoader from "../components/CharacterFetchLoader";
import {
  ArrowDownButton,
  ArrowUpButton,
} from "../components/ui/ArrowIconButtons";

export default function CharactersPage() {
  const searchQuery = useSearchQueryStore((state) => state.searchQuery);

  const filters = {
    status: "",
    gender: "",
    species: "",
    location: "",
    episode: "",
    type: "",
  };

  const {
    characters,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useCharacters(searchQuery, filters);

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

  const handleScrollDown = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  const handleScrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const TextSize = useBreakpointValue({ base: "sm", md: "md" });

  return (
    <>
      <ArrowUpButton onClick={handleScrollUp} />

      {isLoading && <CharactersLoader />}

      <Container css={ConatinerStyles}>
        <Heading css={HeadingStyles}>Rick and Morty Characters</Heading>
        <Text size={TextSize} css={TextStyles}>
          Scroll Down to load more characters.{" "}
          <ArrowDownButton onClick={handleScrollDown} />
        </Text>

        <CharacterFilters />
      </Container>

      <CharactersList characters={characters} />

      {isFetchingNextPage && <CharacterFetchLoader />}

      {error && <CharactersError error={error} />}
    </>
  );
}
