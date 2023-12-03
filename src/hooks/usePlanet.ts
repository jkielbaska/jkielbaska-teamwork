import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getPlanetForCharacter } from "@/services/api";
import { PlanetResponse } from "@/types/tPlanetsResponse";

export const usePlanet = ({ planetId }: { planetId: string }) => {
  const query = useQuery<PlanetResponse>({
    queryKey: ["planet", planetId],
    queryFn: () => getPlanetForCharacter({ planetId }),
    placeholderData: keepPreviousData,
  });

  return query;
};
