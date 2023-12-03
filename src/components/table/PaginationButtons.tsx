import { Paginated, Character } from "@/types/tCharacterResponse";
import { Button } from "@/components/ui/button";

export const PaginationButtons = ({
  isFetching,
  data,
  nextPage,
  previousPage,
}: {
  isFetching: boolean;
  data: Paginated<Character[]> | undefined;
  nextPage: () => void;
  previousPage: () => void;
}) => {
  return (
    <>
      <Button
        onClick={previousPage}
        disabled={isFetching || !data?.previous}
        variant="outline"
        size="sm"
        className={`${
          !data?.previous ? "hidden" : "flex"
        } text-sm hover:text-dwhite p-3 uppercase font-extralight`}
      >
        {isFetching && data?.previous
          ? "Loading..."
          : !data?.previous
          ? ""
          : "Previous page"}
      </Button>
      <Button
        onClick={nextPage}
        disabled={isFetching || !data?.next}
        variant="outline"
        size="sm"
        className={`${
          !data?.next ? "hidden" : "flex"
        } text-sm hover:text-dwhite p-3 uppercase font-extralight`}
      >
        {isFetching && data?.next
          ? "Loading..."
          : !data?.next
          ? ""
          : "Next page"}
      </Button>
    </>
  );
};
