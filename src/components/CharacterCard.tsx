import {
  Box,
  Card,
  CardBody,
  Flex,
  Heading,
  Icon,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

import { css } from "@emotion/react";

import { Character } from "../types/index";
import { Link } from "react-router-dom";

const CardStyles = css`
  height: auto;
  width: auto;
`;
const TextStyles = css`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 4px;
`;

export default function CharacterCard({ character }: { character: Character }) {
  const Status = character.status === "Alive" ? "green.500" : "red.500";

  const CardSize = useBreakpointValue({ base: "sm", md: "md" });

  return (
    <Link to={`/profile/${character.id}`}>
      <Card
        direction={{ base: "column", sm: "row" }}
        size={CardSize}
        css={[CardStyles, { height: "100%" }]}
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          src={character.image}
          alt={character.name}
        />

        <CardBody>
          <Stack spacing="4">
            <Box>
              <Heading>{character.name}</Heading>
              <Text css={TextStyles}>
                <Icon viewBox="0 0 200 200" color={Status}>
                  <path
                    fill="currentColor"
                    d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                  />
                </Icon>
                {character.status} - {character.species}
              </Text>
            </Box>

            <Flex>
              <Box flex="1 1 50%">
                <Heading size="sm" color="grey">
                  Gender:
                </Heading>
                <Text>{character.gender}</Text>
              </Box>

              <Box flex="1 1 50%">
                <Heading size="sm" color="grey">
                  Origin:
                </Heading>
                <Text>{character.origin.name}</Text>
              </Box>
            </Flex>

            <Box>
              <Heading size="sm" color="grey">
                Last known location:
              </Heading>
              <Text>{character.location.name}</Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </Link>
  );
}
