
export type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
};

export interface Location {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}

export interface Resident {
  name: string;
  url: string;
}

export interface Episode {
  name: string;
  url: string;
}

export type FilterProps = {
  status: string;
  location: string;
  episode: string;
  gender: string;
  species: string;
  type: string;
};