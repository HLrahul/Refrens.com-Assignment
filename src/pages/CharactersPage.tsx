import { useEffect, useState } from "react";

import { Container, Heading, Input, InputGroup, InputLeftElement, Text, useBreakpointValue } from "@chakra-ui/react";

import {
  ConatinerStyles,
  HeadingStyles,
  TextStyles,
} from "../styles/CharactersPage.styles";

import { useCharacters } from "../hooks/useCharacter";
import {
  ArrowDownButton,
  ArrowUpButton,
} from "../components/ui/ArrowIconButtons";
import { Search2Icon } from "@chakra-ui/icons";
import { InputLeftElementStyles, InputStyle } from "../styles/Navbar.styles";

import CharactersList from "../components/CharacterList";
// import CharactersError from "../components/CharactersError";
import CharactersLoader from "../components/CharactersLoader";
import CharacterFilters from "../components/CharacterFilters";
import CharacterFetchLoader from "../components/CharacterFetchLoader";
import { FilterProps } from "../types";

export default function CharactersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState<FilterProps>({
    status: "",
    location: "",
    episode: "",
    gender: "",
    species: "",
    type: "",
  });

  const {
    characters,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useCharacters();

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

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (newFilter: FilterProps) => {
    setFilter(newFilter);
  };

  const filteredCharacters = characters.filter((character) => {
    const nameMatch = character.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const statusMatch =
      filter.status === "" || character.status === filter.status;
    const locationMatch =
      filter.location === "" ||
      character.location.name
        .toLowerCase()
        .includes(filter.location.toLowerCase());
    const episodeMatch =
      filter.episode === "" ||
      character.episode.some((episode) => episode.includes(filter.episode));
    const genderMatch =
      filter.gender === "" || character.gender === filter.gender;
    const speciesMatch =
      filter.species === "" || character.species === filter.species;
    const typeMatch = filter.type === "" || character.type === filter.type;

    return (
      nameMatch &&
      statusMatch &&
      locationMatch &&
      episodeMatch &&
      genderMatch &&
      speciesMatch &&
      typeMatch
    );
  });

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

        <InputGroup>
          <InputLeftElement pointerEvents="none" css={InputLeftElementStyles}>
            <Search2Icon color="gray.300" fontSize={TextSize} />
          </InputLeftElement>
          <Input
            css={InputStyle}
            size={TextSize}
            type="text"
            placeholder="Search"
            onChange={handleSearch}
          />
        </InputGroup>

        <CharacterFilters filter={filter} onFilterChange={handleFilterChange} />
      </Container>

      <CharactersList characters={filteredCharacters} />

      {isFetchingNextPage && <CharacterFetchLoader />}

      {error && <div>{JSON.stringify(error)}</div>}
    </>
  );
}
