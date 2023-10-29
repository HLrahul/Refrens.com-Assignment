import { Link } from "react-router-dom";
import { Flex, useBreakpointValue, useDisclosure } from "@chakra-ui/react";
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

  const marginTop = useBreakpointValue({ base: "1", md: "2" });
  const DisplayProp = useBreakpointValue({ base: "none", md: "flex" });

  return (
    <Card direction={{ base: "row" }} size="md" css={CardStyles}>
      <Link to="/">
        <CardHeader css={CardHeaderStyles}>Rick and Morty</CardHeader>
      </Link>

      <CardBody css={CardBodyStyles}>
        <Flex gap="4" display={DisplayProp}>
          <Link to="/characters">Characters</Link>
          <Link to="/locations" style={{ pointerEvents: "none", opacity: 0.5 }}>
            Locations
          </Link>
          <Link to="/episodes" style={{ pointerEvents: "none", opacity: 0.5 }}>
            Episodes
          </Link>
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
