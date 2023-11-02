import { useEffect, useState } from "react";
import { Container, Heading, Input, InputGroup, InputLeftElement, Text, useMediaQuery } from "@chakra-ui/react";

import { Search2Icon } from "@chakra-ui/icons";
import { useEpisodes } from "../hooks/useEpisode";
import { InputLeftElementStyles, InputStyle } from "../styles/Navbar.styles";
import { EpisodesList } from "../components/EpisodesList";
import { ArrowDownButton, ArrowUpButton } from "../components/ui/ArrowIconButtons";
import { ConatinerStyles, HeadingStyles, TextStyles } from "../styles/CharactersPage.styles";

import FetchLoader from "../components/ui/FetchLoader";
import LoadingSpinner from "../components/ui/LoadingSpinner";

export default function EpisodesPage() {
    const [searchTerm, setSearchTerm] = useState("");

    const { episodes, isLoading, error, isFetchingNextPage, hasNextPage, fetchNextPage } = useEpisodes();

    const isSmallScreen = useMediaQuery("(max-width: 767px)");
    const TextSize = isSmallScreen ? "sm" : "md"

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

    const filteredEpisodes = episodes.filter((episode) =>
      episode.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

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

    return (
      <>
        <ArrowUpButton onClick={handleScrollUp} />

        <Container css={ConatinerStyles}>
          <Heading css={HeadingStyles}>
            Every Locations in Rick and Morty
          </Heading>
          <Text size={TextSize} css={TextStyles}>
            Scroll Down to load more Locations.{" "}
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
        </Container>

        {isLoading && <LoadingSpinner />}

        <EpisodesList episodes={filteredEpisodes} />

        {isFetchingNextPage && <FetchLoader />}

        {error && <p>{(error as Error).message}</p>}
      </>
    );
}