import { Link } from "react-router-dom";
import { css } from "@emotion/react";

import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";

import ThemeToggle from "./ui/ThemeToggle";

const CardStyles = css`
  height: 10vh;
  width: 100%;
  border-radius: 0%;
  top: 0;
  position: sticky;

  margin: auto;

  align-items: center;
  justify-content: center;
`;

const HeaderStyles = css`
  height: inherit;
  width: auto;
  align-items: center;
  justify-content: center;
  margin-top: -1rem;
  font-size: 1.5rem;
  font-weight: bold;
`;

const CardBodyStyles = css`
  display: flex;
  gap: 1rem;
`;

const CardFooterStyles = css`
  display: flex;
  gap: 0.5rem;
`;

export default function Navbar() {
  return (
    <Card direction={{ base: "row" }} size="md" css={CardStyles}>
      <CardHeader css={HeaderStyles}>Rick and Morty</CardHeader>

      <CardBody css={CardBodyStyles}>
        <Link to="/characters">Characters</Link>
        <Link to="/locations">Locations</Link>
        <Link to="/episodes">Episodes</Link>
      </CardBody>

      <CardFooter css={CardFooterStyles}>
        <ThemeToggle />
      </CardFooter>
    </Card>
  );
}
