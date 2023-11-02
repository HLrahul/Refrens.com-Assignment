import { Box, Flex } from "@chakra-ui/react";

import { EpisodeCharacterButton } from "./ui/EpisodeCharacterButton";

type EpisodeCardProps = {
    episodeName: string;
    characters: string[];
}

export const EpisodeCard = ( { episodeName, characters } : EpisodeCardProps ) => {
    return (
      <Flex
        direction={{ base: "column", sm: "row" }}
        align="center"
        justify="space-between"
        gap={5}
        p="6"
        border="1px"
        borderRadius="lg"
      >
        <Box fontWeight="semibold" as="h4" lineHeight="tight" noOfLines={1}>
          {episodeName}
        </Box>

        <EpisodeCharacterButton characters={characters} />
      </Flex>
    );
}