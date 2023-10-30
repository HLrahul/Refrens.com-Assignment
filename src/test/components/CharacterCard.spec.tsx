import "@testing-library/jest-dom"

import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import CharacterCard from "../../components/CharacterCard";
import { Character } from "../../types";

const character: Character = {
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
};

describe("CharacterCard", () => {
  it("should render the character name", () => {
    render(
      <MemoryRouter>
        <CharacterCard character={character} />
      </MemoryRouter>
    );

    const name = screen.getByText(character.name);
    expect(name).toBeInTheDocument();
  });

  it("should render the character status and species", () => {
    render(
      <MemoryRouter>
        <CharacterCard character={character} />
      </MemoryRouter>
    );

    const statusAndSpecies = screen.getByText(
      `${character.status} - ${character.species}`
    );
    expect(statusAndSpecies).toBeInTheDocument();
  });

  it("should render the character gender", () => {
    render(
      <MemoryRouter>
        <CharacterCard character={character} />
      </MemoryRouter>
    );

    const gender = screen.getByText("Gender:");
    const genderValue = screen.getByText(character.gender);
    expect(gender).toBeInTheDocument();
    expect(genderValue).toBeInTheDocument();
  });

  it("should render the character origin", () => {
    render(
      <MemoryRouter>
        <CharacterCard character={character} />
      </MemoryRouter>
    );

    const origin = screen.getByText("Origin:");
    const originValue = screen.getByText(character.origin.name);
    expect(origin).toBeInTheDocument();
    expect(originValue).toBeInTheDocument();
  });

  it("should render the character last known location", () => {
    render(
      <MemoryRouter>
        <CharacterCard character={character} />
      </MemoryRouter>
    );

    const lastKnownLocation = screen.getByText("Last known location:");
    const lastKnownLocationValue = screen.getByText(character.location.name);
    expect(lastKnownLocation).toBeInTheDocument();
    expect(lastKnownLocationValue).toBeInTheDocument();
  });
});
