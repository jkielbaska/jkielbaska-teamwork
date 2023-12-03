import { useState } from "react";
import { useCharacters } from "@/hooks/useCharacters";
import { DataTable } from "@/components/table/DataTable";
import { columns } from "@/components/table/columns";
import { LoadingSkeleton } from "./components/loaders/LoadingSkeleton";

function App() {
  const [page, setPage] = useState<number>(1);
  const [searchName, setSearchName] = useState<string | null>(null);
  const { data, isFetching, isError } = useCharacters({
    page,
    search: searchName,
  });

  const handleSearch = (name: string) => {
    setSearchName(name);
    setPage(1);
  };

  return (
    <>
      {data ? (
        <div className="w-full flex items-center justify-center">
          <DataTable
            page={page}
            firstPage={() => setPage(1)}
            nextPage={() => setPage((prev: number) => prev + 1)}
            previousPage={() => setPage((prev: number) => prev - 1)}
            columns={columns}
            handleSearch={handleSearch}
            isFetching={isFetching}
            isError={isError}
            data={data}
          />
        </div>
      ) : (
        <LoadingSkeleton />
      )}
    </>
  );
}

export default App;
