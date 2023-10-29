import { useEffect } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";

import axios from "axios";

import { SimpleGrid } from "@chakra-ui/layout";
import { Container, Heading, IconButton, Spinner, Text, useBreakpointValue } from "@chakra-ui/react";
import { ArrowDownIcon, ArrowUpIcon } from "@chakra-ui/icons";

import { Character } from "../types/index";
import { useCharactersStore } from "../store/charactersStore";
import { ConatinerStyles, GridStyles, HeadingStyles, TextStyles, ScrollUpIconButtonStyles } from "./CharactersPage.styles";

import CharacterCard from "../components/CharacterCard";

export default function CharactersPage() {
  const [characters, setCharacters] = useCharactersStore((state) => [
    state.characters,
    state.setCharacters,
  ]);

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

  useEffect(() => {
    setCharacters(data?.pages?.map((page) => page.results).flat() || []);
  }, [data, setCharacters]);

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

  const columns = useBreakpointValue({ base: 1, lg: 2 });
  const TextSize = useBreakpointValue({ base: "sm", md: "md" });

  return (
    <>
      <IconButton size="sm" aria-label="scrollUpIconButton" onClick={handleScrollUp} css={ScrollUpIconButtonStyles} >
        <ArrowUpIcon />
      </IconButton>

      {isLoading && (
        <div
          style={{
            height: "80vh",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Spinner size="xl" />
        </div>
      )}

      <Container css={ConatinerStyles}>
        <Heading css={HeadingStyles}>Rick and Morty Characters</Heading>
        <Text size={TextSize} css={TextStyles}>
          Scroll Down to load more characters.{" "}
          <IconButton
            size="sm"
            aria-label="arrowDownIconButton"
            onClick={handleScrollDown}
          >
            <ArrowDownIcon />
          </IconButton>
        </Text>
      </Container>

      <SimpleGrid columns={columns} spacing={10} css={GridStyles}>
        {characters.map((character: Character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </SimpleGrid>

      {isFetchingNextPage && (
        <div
          style={{
            height: "10vh",
            width: "100%",
            padding: "10px 0px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Spinner size="sm" />
        </div>
      )}

      {error && (
        <div
          style={{
            height: "auto",
            width: "100%",
            padding: "10px 0px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Error: {error.message}
        </div>
      )}
    </>
  );
}
