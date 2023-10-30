import "@testing-library/jest-dom"

import { render, screen } from "@testing-library/react";
import { Character } from "../../types";

import CharactersList from "../../components/CharacterList";

jest.mock("../../components/CharacterCard", () => {
  return function MockCharacterCard(props: { character: Character }) {
    return <div data-testid="character-card">{props.character.name}</div>;
  };
});

const characters: Character[] = [
  {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Male",
    origin: {
      name: "Earth (C-137)",
      url: "https://rickandmortyapi.com/api/location/1",
    },
    location: {
      name: "Earth (Replacement Dimension)",
      url: "https://rickandmortyapi.com/api/location/20",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    episode: [
      "https://rickandmortyapi.com/api/episode/1",
      "https://rickandmortyapi.com/api/episode/2",
    ],
    url: "https://rickandmortyapi.com/api/character/1",
    created: "2017-11-04T18:48:46.250Z",
  },
  {
    id: 2,
    name: "Morty Smith",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Male",
    origin: {
      name: "Earth (C-137)",
      url: "https://rickandmortyapi.com/api/location/1",
    },
    location: {
      name: "Earth (Replacement Dimension)",
      url: "https://rickandmortyapi.com/api/location/20",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    episode: [
      "https://rickandmortyapi.com/api/episode/1",
      "https://rickandmortyapi.com/api/episode/2",
    ],
    url: "https://rickandmortyapi.com/api/character/2",
    created: "2017-11-04T18:50:21.651Z",
  },
];

describe("CharactersList", () => {
  it("should render a list of characters", () => {
    render(<CharactersList characters={characters} />);

    const characterCards = screen.getAllByTestId("character-card");
    expect(characterCards).toHaveLength(characters.length);
  });

  it("should render a message when no characters are found", () => {
    render(<CharactersList characters={[]} />);

    const message = screen.getByText("No characters found.");
    expect(message).toBeInTheDocument();
  });
});
