import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import { Location } from "../../types";

import { LocationsList } from "../../components/LocationsList";

jest.mock("../../components/LocationCard", () => {
  return function MockLocationCard(props: {
    locationName: string;
    residents: string[];
  }) {
    return <div data-testid="location-card">{props.locationName}</div>;
  };
});

const locations: Location[] = [
  {
    id: 1,
    name: "Earth (C-137)",
    type: "Planet",
    dimension: "Dimension C-137",
    residents: [
      "https://rickandmortyapi.com/api/character/1",
      "https://rickandmortyapi.com/api/character/2",
    ],
    url: "https://rickandmortyapi.com/api/location/1",
    created: "2017-11-10T13:08:13.191Z",
  },
  {
    id: 2,
    name: "Abadango",
    type: "Cluster",
    dimension: "unknown",
    residents: ["https://rickandmortyapi.com/api/character/6"],
    url: "https://rickandmortyapi.com/api/location/2",
    created: "2017-11-10T13:08:13.191Z",
  },
];

describe("LocationsList", () => {
  it("should render a list of locations", () => {
    render(<LocationsList locations={locations} />);

    const locationCards = screen.getAllByTestId("location-card");
    expect(locationCards).toHaveLength(locations.length);
  });
});
