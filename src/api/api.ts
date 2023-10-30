import axios from "axios";
import { Character, Episode, Location, Resident } from "../types";

export const fetchCharacter = async (id: string): Promise<Character> => {
  const response = await axios.get(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  return response.data;
};

export const fetchLocation = async (url: string): Promise<Location> => {
  const response = await axios.get(url);
  return response.data;
};

export const fetchResidents = (residentUrls: string[]): Promise<Resident[]> => {
  const residentPromises = residentUrls.map((url) =>
    axios.get(url).then((response) => response.data)
  );
  return Promise.all(residentPromises);
};

export const fetchEpisodes = (episodeUrls: string[]): Promise<Episode[]> => {
  const episodePromises = episodeUrls.map((url) =>
    axios.get(url).then((response) => response.data)
  );
  return Promise.all(episodePromises);
};
