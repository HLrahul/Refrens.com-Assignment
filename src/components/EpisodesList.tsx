import { SimpleGrid } from "@chakra-ui/react";

import { Episode } from "../types";
import { EpisodeCard } from "./EpisodeCard";
import { GridStyles } from "../styles/CharactersPage.styles";



interface EpisodesListProps {
  episodes: Episode[];
}

export const EpisodesList = ({ episodes }: EpisodesListProps) => {
  return (
    <SimpleGrid
      zIndex={0}
      columns={{ base: 1, lg: 3 }}
      spacing={10}
      css={GridStyles}
    >
      {episodes.map((episode) => (
        <EpisodeCard
          key={episode.id}
          episodeName={episode.name}
          characters={episode.characters}
        />
      ))}
    </SimpleGrid>
  );
};
