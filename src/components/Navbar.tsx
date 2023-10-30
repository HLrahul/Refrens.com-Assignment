import { Link } from "react-router-dom";
import { Flex, useDisclosure, useMediaQuery } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

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

import { CardStyles, CardHeaderStyles, CardFooterStyles, CardBodyStyles, HamburgerIconStyles } from "../styles/Navbar.styles";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const isSmallScreen = useMediaQuery("(max-width: 767px)");

  const marginTop = isSmallScreen ? "1" : "2";
  const displayProp = isSmallScreen ? "flex" : "none";

  return (
    <Card direction={{ base: "row" }} size="md" css={CardStyles}>
      <Link to="/">
        <CardHeader css={CardHeaderStyles}>Rick and Morty</CardHeader>
      </Link>

      <CardBody css={CardBodyStyles}>
        <Flex gap="4" display={displayProp}>
          <Link title="Characters" role="link" to="/characters">
            Characters
          </Link>
          <Link
            title="Locations"
            role="link"
            to="/locations"
            style={{ pointerEvents: "none", opacity: 0.5 }}
          >
            Locations
          </Link>
          <Link
            title="Episodes"
            role="link"
            to="/episodes"
            style={{ pointerEvents: "none", opacity: 0.5 }}
          >
            Episodes
          </Link>
        </Flex>
      </CardBody>

      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent role="Menu">
          <DrawerCloseButton role="button" name="Close" />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <Stack spacing={4}>
              <Link to="/characters" onClick={onClose}>
                Characters
              </Link>
              <Link
                to="/locations"
                onClick={onClose}
                style={{ pointerEvents: "none", opacity: 0.5 }}
              >
                Locations
              </Link>
              <Link
                to="/episodes"
                onClick={onClose}
                style={{ pointerEvents: "none", opacity: 0.5 }}
              >
                Episodes
              </Link>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <CardFooter css={CardFooterStyles}>
        <ThemeToggle />

        <HamburgerIcon
          role="button"
          name="Open menu"
          css={HamburgerIconStyles}
          w={6}
          h={6}
          ml="auto"
          mr={2}
          mt={marginTop}
          display={isSmallScreen ? "none" : "flex"}
          onClick={onOpen}
        />
      </CardFooter>
    </Card>
  );
}
