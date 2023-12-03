import { ArrowUp, ArrowDown, ChevronsUpDown } from "lucide-react";
import { Column } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Character } from "@/types/tCharacterResponse";

export const SortMenu = ({
  sortString,
  column,
  title,
}: {
  sortString?: boolean;
  column: Column<Character, unknown>;
  title: string;
}) => {
  if (!column.getCanSort()) {
    return <div>{title}</div>;
  }

  return (
    <div className="flex justify-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="-ml-3 h-8 data-[state=open]:bg-accent"
          >
            <span className="text-zinc-300">{title}</span>
            {column.getIsSorted() === "desc" ? (
              sortString ? (
                <p className="ml-2 text-yellow text-xs">Z-A</p>
              ) : (
                <ArrowDown className="ml-2 h-4 w-4 text-yellow" />
              )
            ) : column.getIsSorted() === "asc" ? (
              sortString ? (
                <p className="ml-2 text-yellow text-xs">A-Z</p>
              ) : (
                <ArrowUp className="ml-2 h-4 w-4 text-yellow" />
              )
            ) : (
              <ChevronsUpDown className="ml-2 h-4 w-4" />
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuItem onClick={() => column.toggleSorting(false)}>
            {sortString ? (
              <p className="ml-2 text-yellow">A-Z</p>
            ) : (
              <>
                <ArrowUp className="mr-2 h-3.5 w-3.5 text-yellow" />
                Asc
              </>
            )}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => column.toggleSorting(true)}>
            {sortString ? (
              <p className="ml-2 text-yellow ">Z-A</p>
            ) : (
              <>
                <ArrowDown className="mr-2 h-3.5 w-3.5 text-yellow" />
                Desc
              </>
            )}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
