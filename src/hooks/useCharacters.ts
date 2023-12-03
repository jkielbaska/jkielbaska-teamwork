import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getCharactersByName, getCharactersPaginated } from "@/services/api";
import { Character, Paginated } from "@/types/tCharacterResponse";

interface UseCharactersProps {
  page?: number | string;
  search?: string | null;
}

export const useCharacters = ({ page, search }: UseCharactersProps) => {
  const query = useQuery<Paginated<Character[]>>({
    queryKey: search ? ["charactersByName", search] : ["characters", page],
    queryFn: () =>
      search ? getCharactersByName(search) : getCharactersPaginated({ page }),
    placeholderData: keepPreviousData,
  });

  return query;
};
