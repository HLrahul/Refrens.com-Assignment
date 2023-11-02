import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { EpisodesList } from "../../components/EpisodesList";

const queryClient = new QueryClient();

const episodes = [
  {
    id: 1,
    name: "Pilot",
    air_date: "December 2, 2013",
    episode: "S01E01",
    url: "https://rickandmortyapi.com/api/episode/1",
    created: "November 10, 2019",
    characters: [
      "https://rickandmortyapi.com/api/character/1",
      "https://rickandmortyapi.com/api/character/2",
    ],
  },
  {
    id: 2,
    name: "Lawnmower Dog",
    air_date: "December 9, 2013",
    episode: "S01E02",
    url: "https://rickandmortyapi.com/api/episode/2",
    created: "November 10, 2019",
    characters: [
      "https://rickandmortyapi.com/api/character/1",
      "https://rickandmortyapi.com/api/character/2",
    ],
  },
];

describe("EpisodesList", () => {
  it("should render the episode names", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <EpisodesList episodes={episodes} />
      </QueryClientProvider>
    );

    episodes.forEach((episode) => {
      const name = screen.getByText(episode.name);
      expect(name).toBeInTheDocument();
    });
  });

  it("should render the EpisodeCard components", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <EpisodesList episodes={episodes} />
      </QueryClientProvider>
    );

    const cards = screen.getAllByRole("article");
    expect(cards).toHaveLength(episodes.length);
  });
});
