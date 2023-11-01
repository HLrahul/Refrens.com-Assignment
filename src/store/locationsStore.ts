import { create } from "zustand";

type Location = {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
};

type LocationsState = {
  locations: Location[];
  setLocations: (locations: Location[]) => void;
};

export const useLocationsStore = create<LocationsState>((set) => ({
  locations: [],
  setLocations: (locations) => set({ locations }),
}));
