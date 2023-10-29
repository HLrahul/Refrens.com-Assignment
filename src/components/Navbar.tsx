import { useState } from "react";
import { Link } from "react-router-dom";
import { Flex, Input, InputGroup, InputLeftElement, useBreakpointValue, useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon, Search2Icon } from "@chakra-ui/icons";

import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Stack,
} from "@chakra-ui/react";

import { Card, CardBody, CardHeader, CardFooter } from "@chakra-ui/react";
import ThemeToggle from "./ui/ThemeToggle";

import { CardStyles, CardHeaderStyles, CardFooterStyles, InputLeftElementStyles, CardBodyStyles, HamburgerIconStyles, InputStyle } from "../styles/Navbar.styles";
import { useSearchQueryStore } from "../store/searchQueryStore";

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const setSearchQueryState = useSearchQueryStore((state) => state.setSearchQuery);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);
    setSearchQueryState(query);
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  const marginTop = useBreakpointValue({ base: "1", md: "2" });
  const DisplayProp = useBreakpointValue({ base: "none", md: "flex" });
  const InputSize = useBreakpointValue({ base: "sm", md: "md" });

  return (
    <Card direction={{ base: "row" }} size="md" css={CardStyles}>
      <CardHeader css={CardHeaderStyles}>Rick and Morty</CardHeader>

      <CardBody css={CardBodyStyles}>
        <Flex gap="4" display={DisplayProp}>
          <Link to="/characters">Characters</Link>
          <Link to="/locations">Locations</Link>
          <Link to="/episodes">Episodes</Link>
        </Flex>
      </CardBody>

      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <Stack spacing={4}>
              <Link to="/characters" onClick={onClose}>
                Characters
              </Link>
              <Link to="/locations" onClick={onClose}>
                Locations
              </Link>
              <Link to="/episodes" onClick={onClose}>
                Episodes
              </Link>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <CardFooter css={CardFooterStyles}>
        <InputGroup>
          <InputLeftElement pointerEvents="none" css={InputLeftElementStyles}>
            <Search2Icon color="gray.300" fontSize={InputSize} />
          </InputLeftElement>
          <Input
            css={InputStyle}
            size={InputSize}
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearch}
          />
        </InputGroup>

        <ThemeToggle />

        <HamburgerIcon
          css={HamburgerIconStyles}
          w={6}
          h={6}
          ml="auto"
          mr={2}
          mt={marginTop}
          display={{ base: "flex", md: "none" }}
          onClick={onOpen}
        />
      </CardFooter>
    </Card>
  );
}
