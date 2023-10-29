import { Link } from "react-router-dom";
import { Button, Container, Heading, Highlight, Text } from "@chakra-ui/react";

import { BottomContainerStyles, HomePageContainerStyle, SubTitleStyles, TitleHeadingStyles } from "../styles/HomePage.styles";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export default function HomePage() {
    return (
      <div>
        <Container css={HomePageContainerStyle}>
          <Heading css={TitleHeadingStyles}>Refrens.com Assignment</Heading>
          <Text css={SubTitleStyles}>
            <Highlight
              query="REST"
              styles={{ px: "0.5", py: "0", bg: "red.100" }}
            >
              A web application displaying characters' profile from Rick and
              Morty API using the REST version
            </Highlight>
          </Text>

          <Text style={{ marginTop: "2rem" }}>
            Click to go to the Characters Page
          </Text>
          <Link to="/characters">
            <Button>Characters</Button>
          </Link>
        </Container>

        <Container css={BottomContainerStyles}>
          <Text>
            Crafted By{" "}
            <Link
              to="https://github.com/HLrahul"
              target="_blank"
              style={{ textDecoration: "underline" }}
            >
              @HLrahul
            </Link>
          </Text>

          <Text>
            <Link
              to="https://github.com/HLrahul/Refrens.com-Assignment"
              target="_blank"
              style={{ textDecoration: "underline" }}
            >
              <ExternalLinkIcon mx="2px" />
              Go to Repo
            </Link>
          </Text>
        </Container>
      </div>
    );
}