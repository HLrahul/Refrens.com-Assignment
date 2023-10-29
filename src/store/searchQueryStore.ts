import { create } from "zustand";

type Store = {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
};

export const useSearchQueryStore = create<Store>((set) => ({
  searchQuery: "",
  setSearchQuery: (query: string) => set({ searchQuery: query }),
}));
