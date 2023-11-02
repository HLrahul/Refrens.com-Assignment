import { useParams } from "react-router";
import { useEffect, useState } from "react";

import { Character, Location, Resident } from "../types";
import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  Icon,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { TextStyles } from "../styles/ProfilePage.styles";
import {
  fetchCharacter,
  fetchEpisodes,
  fetchLocation,
  fetchResidents,
} from "../api/api";

export interface Episode {
  name: string;
  url: string;
}

export default function ProfilePage() {
  const { id } = useParams<{ id: string }>();
  const [character, setCharacter] = useState<Character | null>(null);
  const [location, setLocation] = useState<Location>();
  const [residents, setResidents] = useState<Resident[]>([]);
  const [episodes, setEpisodes] = useState<Episode[]>([]);

  const residentsDisclosure = useDisclosure();
  const episodesDisclosure = useDisclosure();

  useEffect(() => {
    if (id) {
      fetchCharacter(id).then((data) => setCharacter(data));
    }
  }, [id]);

  useEffect(() => {
    if (character) {
      fetchLocation(character.location.url)
        .then((data) => {
          setLocation(data);
          return data.residents;
        })
        .then((residentUrls: string[]) => {
          fetchResidents(residentUrls).then((residents) => {
            setResidents(residents);
          });
        });

      fetchEpisodes(character.episode).then((episodes) => {
        setEpisodes(episodes);
      });
    }
  }, [character]);

  if (!character || !location) {
    return (
      <div
        style={{
          height: "80vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Spinner size="md" />
      </div>
    );
  }

  const Status = character.status === "Alive" ? "green.500" : "red.500";

  return (
    <div
      style={{
        minHeight: "80vh",
        width: "100%",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
      }}
    >
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "300px" }}
          src={character.image}
          alt={character.name}
        />
        <CardBody flex="0 0 0%" style={{ width: "auto" }}>
          <Stack spacing="0">
            <Heading size="lg">{character.name}</Heading>

            <Text css={TextStyles}>
              <Icon viewBox="0 0 200 200" color={Status}>
                <path
                  fill="currentColor"
                  d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                />
              </Icon>
              {character.status} - {character.species}
            </Text>
          </Stack>

          <Stack spacing="3" mt="3">
            <Flex gap="5">
              <Box flex="1 1 50%">
                <Heading size="sm" color="grey">
                  Gender:
                </Heading>
                <Text>{character.gender}</Text>
              </Box>

              <Box flex="1 1 100%">
                <Heading size="sm" color="grey">
                  Origin:
                </Heading>
                <Text>{character.origin.name}</Text>
              </Box>
            </Flex>

            <Flex gap="5">
              <Box flex="1 1 50%">
                <Heading size="sm" color="grey">
                  Last known location:
                </Heading>
                <Text>{character.location.name}</Text>
              </Box>
            </Flex>

            <Flex gap="5">
              <Box flex="1 1 50%">
                <Heading size="sm" color="grey">
                  Origin:
                </Heading>
                <Text>{character.origin.name}</Text>
              </Box>
            </Flex>

            <Flex gap="5">
              <Box flex="1 1 50%">
                <Heading size="sm" color="grey">
                  Dimension:
                </Heading>
                <Text>{location && location.dimension}</Text>
              </Box>
            </Flex>

            <Flex gap="5">
              <Box flex="1 1 50%">
                <Button onClick={residentsDisclosure.onOpen}>Residents</Button>
                <Modal
                  isOpen={residentsDisclosure.isOpen}
                  onClose={residentsDisclosure.onClose}
                  scrollBehavior="inside"
                  isCentered
                >
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>Residents</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      <Stack>
                        {residents.map((resident) => (
                          <Text key={resident.url}>{resident.name}</Text>
                        ))}
                      </Stack>
                    </ModalBody>
                    <ModalFooter>
                      <Button onClick={residentsDisclosure.onClose}>
                        Close
                      </Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
              </Box>

              <Box flex="1 1 50%">
                <Button onClick={episodesDisclosure.onOpen}>Episodes</Button>

                <Modal
                  isOpen={episodesDisclosure.isOpen}
                  onClose={episodesDisclosure.onClose}
                  scrollBehavior="inside"
                  isCentered
                >
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>Episodes</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      <Stack>
                        {episodes.map((episode) => (
                          <Text key={episode.url}>{episode.name}</Text>
                        ))}
                      </Stack>
                    </ModalBody>
                    <ModalFooter>
                      <Button onClick={episodesDisclosure.onClose}>
                        Close
                      </Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
              </Box>
            </Flex>
          </Stack>
        </CardBody>
      </Card>
    </div>
  );
}
