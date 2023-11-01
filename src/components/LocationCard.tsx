import { Card, CardFooter, CardHeader } from "@chakra-ui/react";

import { CardStyles } from "../styles/Navbar.styles";
import { LocationCharactersButton } from "./ui/LocationCharactersButton";

type LocationCardProps = {
    locationName: string;
    residents: string[];
}

export default function LocationCard ( { locationName, residents } : LocationCardProps ) {
    return (
      <Card direction={{ base: "column", sm: "row" }}
        size="sm"
        css={[CardStyles, { height: "100%" }]}>
        <CardHeader>{locationName}</CardHeader>
        <CardFooter>
          <LocationCharactersButton residents={residents} />
        </CardFooter>
      </Card>
    );
}