import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { useState } from "react";
import { Paginated, Character } from "@/types/tCharacterResponse";
import { InputSelect } from "./InputSelect";
import { PaginationButtons } from "./PaginationButtons";

export function DataTable({
  page,
  firstPage,
  nextPage,
  previousPage,
  columns,
  data,
  handleSearch,
  isFetching,
  isError,
}: {
  page: number;
  firstPage: () => void;
  nextPage: () => void;
  previousPage: () => void;
  columns: ColumnDef<Character>[];
  data: Paginated<Character[]>;
  handleSearch: (name: string) => void;
  isFetching?: boolean;
  isError?: boolean;
}) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const table = useReactTable({
    data: data.results || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
    },
  });

  return (
    <>
      <div className="flex justify-center w-full max-w-screen-2xl">
        <button
          onClick={previousPage}
          disabled={isFetching || !data?.previous}
          className={`hidden xl:flex ${
            !data?.previous
              ? "bg-transparent border-2 border-zinc-800 text-zinc-800"
              : "bg-zinc-800 hover:text-dwhite"
          } pagination-big ml-7`}
        >
          {isFetching && data?.previous ? "..." : "<"}
        </button>

        <div className="flex flex-col items-center mb-14 w-full">
          <h1 onClick={firstPage} className="title hover:cursor-pointer pt-4">
            Star Wars Table
          </h1>
          <div className="flex items-center py-4">
            <InputSelect table={table} handleSearch={handleSearch} />
          </div>
          <div className="w-[90%] border-2 border-zinc-800 rounded-lg  text-dwhite max-w-screen-2xl">
            {isError ? (
              <div className="text-3xl">Something went wrong...</div>
            ) : (
              <Table className={`${isFetching && "blur-[1px] animate-pulse"}`}>
                <TableHeader className="bg-zinc-700">
                  {table.getHeaderGroups().map((headerGroup) => (
                    <TableRow key={headerGroup.id}>
                      {headerGroup.headers.map((header) => {
                        return (
                          <TableHead key={header.id} className="border">
                            {header.isPlaceholder
                              ? null
                              : flexRender(
                                  header.column.columnDef.header,
                                  header.getContext()
                                )}
                          </TableHead>
                        );
                      })}
                    </TableRow>
                  ))}
                </TableHeader>
                <TableBody>
                  {table.getRowModel().rows?.length ? (
                    table.getRowModel().rows.map((row) => (
                      <TableRow key={row.id} className="text-lg h-28">
                        {row.getVisibleCells().map((cell) => (
                          <TableCell key={cell.id}>
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}
                          </TableCell>
                        ))}
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell
                        colSpan={columns.length}
                        className="h-24 text-center"
                      >
                        No results.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            )}
          </div>

          <div className="flex items-center justify-end space-x-2 py-4 xl:hidden">
            <PaginationButtons
              isFetching={isFetching || false}
              data={data}
              nextPage={nextPage}
              previousPage={previousPage}
            />
          </div>
          <p className={`${isFetching && "invisible"} uppercase text-dwhite`}>
            page: {page}
          </p>
        </div>
        <button
          onClick={nextPage}
          disabled={isFetching || !data?.next}
          className={`hidden xl:flex ${
            !data?.next
              ? "bg-transparent border-2 border-zinc-800 text-zinc-800"
              : "bg-zinc-800 hover:text-dwhite"
          } pagination-big mr-7`}
        >
          {isFetching && data?.next ? "..." : ">"}
        </button>
      </div>
    </>
  );
}
