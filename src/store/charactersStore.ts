import { create } from "zustand";
import { Character } from "../types/index";

type CharactersStore = {
  characters: Character[];
  setCharacters: (characters: Character[]) => void;
};

export const useCharactersStore = create<CharactersStore>((set) => ({
  characters: [],
  setCharacters: (characters: Character[]) => set({ characters }),
}));
