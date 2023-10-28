import { Card, Image } from "@chakra-ui/react"

import { css } from "@emotion/react"

import { Character } from "../types/index"

const CardStyles = css`
    height: auto;
    width: auto;
`

export default function CharacterCard({ character }: { character: Character }) {
  return (
    <Card direction={{ base: "column", sm: "row" }} size="md" css={CardStyles}>
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src= {character.image}
        alt={character.name}
      />
    </Card>
  );
}