import { Text } from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/layout";

import { Character } from "../types/index";

import { GridStyles } from "../styles/CharactersPage.styles";
import { TextStyles } from "../styles/CharacterList.styles";

import CharacterCard from "../components/CharacterCard";

interface Props {
  characters: Character[];
}

const CharactersList = ({ characters }: Props) => {
  if (characters.length === 0) {
    return (
      <Text size="sm" css={TextStyles}>
        No characters found.
      </Text>
    );
  }

  return (
    <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={10} css={GridStyles}>
      {characters.map((character: Character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </SimpleGrid>
  );
};

export default CharactersList;
