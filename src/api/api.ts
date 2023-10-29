import { Character, Episode, Location, Resident } from "../types";

export const fetchCharacter = async (id: string): Promise<Character> => {
  const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    return await response.json();
};

export const fetchLocation = async (url: string): Promise<Location> => {
  const response = await fetch(url);
    return await response.json();
};

export const fetchResidents = (residentUrls: string[]): Promise<Resident[]> => {
  const residentPromises = residentUrls.map((url) =>
    fetch(url).then((response) => response.json())
  );
  return Promise.all(residentPromises);
};

export const fetchEpisodes = (episodeUrls: string[]): Promise<Episode[]> => {
  const episodePromises = episodeUrls.map((url) =>
    fetch(url).then((response) => response.json())
  );
  return Promise.all(episodePromises);
};
