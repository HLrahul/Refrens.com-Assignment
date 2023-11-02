import { Box, Flex} from "@chakra-ui/react";

import { LocationCharactersButton } from "./ui/LocationCharactersButton";

type LocationCardProps = {
    locationName: string;
    residents: string[];
}

export default function LocationCard ( { locationName, residents } : LocationCardProps ) {
    return (
      <Flex direction={{ base: "column", sm: "row" }} align="center" justify="space-between" gap={5} p="6" border="1px" borderRadius="lg" >
        <Box fontWeight="semibold" as="h4" lineHeight="tight" noOfLines={1}>
          {locationName}
        </Box>

        <LocationCharactersButton residents={residents} />
      </Flex>
    );
}