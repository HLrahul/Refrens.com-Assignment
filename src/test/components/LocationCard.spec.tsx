import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LocationCard from "../../components/LocationCard";

const queryClient = new QueryClient();

const locationName = "Earth (C-137)";
const residents = [
  "https://rickandmortyapi.com/api/character/1",
  "https://rickandmortyapi.com/api/character/2",
];

describe("LocationCard", () => {
  it("should render the location name", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <LocationCard locationName={locationName} residents={residents} />
      </QueryClientProvider>
    );

    const name = screen.getByText(locationName);
    expect(name).toBeInTheDocument();
  });

  it("should render the LocationCharactersButton component", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <LocationCard locationName={locationName} residents={residents} />
      </QueryClientProvider>
    );

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});
