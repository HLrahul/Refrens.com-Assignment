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

import { CardStyles, HeaderStyles, CardFooterStyles, FlexStyles } from "./Navbar.styles";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const marginTop = useBreakpointValue({ base: "1", md: "2" });

  return (
    <Card direction={{ base: "row" }} size="md" css={CardStyles}>
      <CardHeader css={HeaderStyles}>Rick and Morty</CardHeader>

      <CardBody>
        <Flex gap="4" css={FlexStyles}>
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
        <ThemeToggle />

        <HamburgerIcon
          w={6}
          h={6}
          ml="auto"
          mr={2}
          mt={marginTop}
          display={{ base: "block", md: "none"}}
          onClick={onOpen}
        />
      </CardFooter>
    </Card>
  );
}
