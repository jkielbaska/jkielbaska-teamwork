import { queryClient } from "@/main";

import { Character } from "@/types/tCharacterResponse";
import { PlanetResponse } from "@/types/tPlanetsResponse";

export const sortByPlanetName = (
  a: { original: Character },
  b: { original: Character }
) => {
  const aHomeworldUrlParts = a?.original?.homeworld.split("/").filter(Boolean);
  const aPlanetId = aHomeworldUrlParts[aHomeworldUrlParts.length - 1];

  const bHomeworldUrlParts = b?.original?.homeworld.split("/").filter(Boolean);
  const bPlanetId = bHomeworldUrlParts[bHomeworldUrlParts.length - 1];

  const aPlanetData = queryClient.getQueryData([
    "planet",
    aPlanetId,
  ]) as PlanetResponse;

  const bPlanetData = queryClient.getQueryData([
    "planet",
    bPlanetId,
  ]) as PlanetResponse;

  const aPlanetName = aPlanetData?.name;
  const bPlanetName = bPlanetData?.name;

  if (aPlanetName! < bPlanetName!) {
    return -1;
  }
  if (aPlanetName! > bPlanetName!) {
    return 1;
  }
  return 0;
};
