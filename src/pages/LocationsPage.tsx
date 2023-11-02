import { useEffect, useState } from "react";

import { Search2Icon } from "@chakra-ui/icons";
import { useLocations } from "../hooks/useLocation";
import { InputLeftElementStyles, InputStyle } from "../styles/Navbar.styles";
import { ArrowDownButton, ArrowUpButton } from "../components/ui/ArrowIconButtons";
import { ConatinerStyles, HeadingStyles, TextStyles } from "../styles/CharactersPage.styles";
import { Container, Heading, Input, InputGroup, InputLeftElement, Text, useMediaQuery } from "@chakra-ui/react";

import FetchLoader from "../components/ui/FetchLoader";
import { LocationsList } from "../components/LocationsList";
import LoadingSpinner from "../components/ui/LoadingSpinner";

export default function LocationsPage() {
  const {
    locations,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useLocations();

  const [searchTerm, setSearchTerm] = useState("");

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

  const filteredLocations = locations.filter((location) =>
    location.name.toLowerCase().includes(searchTerm.toLowerCase())
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

      {isLoading && <LoadingSpinner />}

      <Container css={ConatinerStyles}>
        <Heading css={HeadingStyles}>Every Locations in Rick and Morty</Heading>
        <Text size={TextSize} css={TextStyles}>
          Scroll Down to load more Locations.{" "}
        </Text>
        <ArrowDownButton onClick={handleScrollDown} />

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

      <LocationsList locations={filteredLocations} />

      {isFetchingNextPage && <FetchLoader />}

      {error && <p>{(error as Error).message}</p>}
    </>
  );
}
