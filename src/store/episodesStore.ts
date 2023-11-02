import { create } from "zustand";

type Episode = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
};

type Store = {
  episodes: Episode[];
  addEpisode: (episode: Episode) => void;
};

export const useEpisodesStore = create<Store>((set) => ({
  episodes: [],
  addEpisode: (episode) =>
    set((state) => ({ episodes: [...state.episodes, episode] })),
}));
