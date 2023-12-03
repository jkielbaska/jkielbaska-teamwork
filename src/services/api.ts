import axios from "axios";
import { Character, Paginated } from "@/types/tCharacterResponse";
import { PlanetResponse } from "@/types/tPlanetsResponse";

const apiBase = "https://swapi.dev/api";
export const api = axios.create({
  baseURL: apiBase,
});

export const getPlanetForCharacter = async ({
  planetId,
}: {
  planetId: string;
}) => {
  const response = await api.get<PlanetResponse>(`/planets/${planetId}`);
  return response.data;
};

export const getCharactersByName = async (search: string) => {
  const response = await api.get<Paginated<Character[]>>(
    `/people/?search=${search}`
  );
  return response.data;
};

export const getCharactersPaginated = async ({
  page,
}: {
  page: number | string | undefined;
}) => {
  console.log("Fetching page:", page);
  const response = await api.get<Paginated<Character[]>>("/people", {
    params: { page },
  });
  return response.data;
};
