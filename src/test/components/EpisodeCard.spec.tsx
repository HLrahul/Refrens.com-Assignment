import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { EpisodeCard } from "../../components/EpisodeCard";

const queryClient = new QueryClient();

describe("EpisodeCard", () => {
  it("should render the episode name", () => {
    const episodeName = "Pilot";
    const characters = [
      "https://rickandmortyapi.com/api/character/1",
      "https://rickandmortyapi.com/api/character/2",
    ];

    render(
      <QueryClientProvider client={queryClient}>
        <EpisodeCard episodeName={episodeName} characters={characters} />
      </QueryClientProvider>
    );

    const name = screen.getByText(episodeName);
    expect(name).toBeInTheDocument();
  });

  it("should render the EpisodeCharacterButton component", () => {
    const episodeName = "Pilot";
    const characters = [
      "https://rickandmortyapi.com/api/character/1",
      "https://rickandmortyapi.com/api/character/2",
    ];

    render(
      <QueryClientProvider client={queryClient}>
        <EpisodeCard episodeName={episodeName} characters={characters} />
      </QueryClientProvider>
    );

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});
