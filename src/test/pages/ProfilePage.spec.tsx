import "@testing-library/jest-dom"

import ProfilePage from "../../pages/ProfilePage";
import { render } from "@testing-library/react";
import axios from "axios";

const mockCharacter = {
  name: "Morty Smith",
  status: "Alive",
  species: "Human",
  gender: "Male",
  origin: { name: "Earth" },
  location: {
    name: "Earth",
    url: "https://rickandmortyapi.com/api/location/1",
  },
  image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
  episode: ["https://rickandmortyapi.com/api/episode/1"],
};
const mockLocation = {
  name: "Earth",
  type: "Planet",
  dimension: "Dimension C-137",
  residents: ["https://rickandmortyapi.com/api/character/1"],
};
const mockResidents = [
  {
    name: "Rick Sanchez",
    url: "https://rickandmortyapi.com/api/character/1",
  },
];
const mockEpisodes = [
  { name: "Pilot", url: "https://rickandmortyapi.com/api/episode/1" },
];

jest.mock("axios");
jest.spyOn(axios, "get").mockResolvedValueOnce({ data: mockCharacter });
jest.spyOn(axios, "get").mockResolvedValueOnce({ data: mockLocation });
jest.spyOn(axios, "get").mockResolvedValueOnce({ data: mockResidents });
jest.spyOn(axios, "get").mockResolvedValueOnce({ data: mockEpisodes });

describe("ProfilePage", () => {
  test("renders character name", async () => {
    render(<ProfilePage />);
  });
});
