import { PlanetResponse } from "./tPlanetsResponse";

export interface Character {
  error?: boolean;
  name?: string;
  height?: number;
  mass?: string;
  hair_color?: string;
  skin_color?: string;
  eye_color?: string;
  birth_year?: string;
  gender?: string;
  homeworld: string;
  films?: string[];
  species?: string[];
  vehicles?: string[];
  starships?: string[];
  created?: string;
  edited?: string;
  url?: string;
  detail?: string;
  planet: PlanetResponse;
}

export interface Paginated<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T;
}
