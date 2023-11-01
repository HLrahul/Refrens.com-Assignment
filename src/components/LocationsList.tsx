import { SimpleGrid } from "@chakra-ui/react";

import LocationCard from "./LocationCard";

import { GridStyles } from "../styles/CharactersPage.styles";
import { Location } from "../types/index";

type LocationsListProps = {
  locations: Location[];
};

export const LocationsList = ( {locations} : LocationsListProps ) => {
    return (
      <SimpleGrid zIndex={0} columns={{ base: 1, lg: 3 }} spacing={10} css={GridStyles}>
        {locations.map((location) => (
          <LocationCard
            key={location.name}
            locationName={location.name}
            residents={location.residents}
          />
        ))}
      </SimpleGrid>
    );
}