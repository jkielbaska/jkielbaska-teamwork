import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Character } from "@/types/tCharacterResponse";
import { Table } from "@tanstack/react-table";
import { useState } from "react";
import { Button } from "../ui/button";

export function InputSelect({
  table,
  handleSearch,
}: {
  table: Table<Character>;
  handleSearch: (name: string) => void;
}) {
  const [filterType, setFilterType] = useState<string>("Table Only");
  const [searchName, setSearchName] = useState<string | null>(null);

  const onValueChange = (value: string) => {
    setFilterType(value);
  };

  return (
    <div
      className={`flex flex-col ${
        filterType === "Table Only" ? "md:flex-row-reverse" : "md:flex-row"
      } `}
    >
      <Select onValueChange={onValueChange}>
        <SelectTrigger className="w-full md:w-[180px]">
          <SelectValue placeholder="Filtering Type" />
        </SelectTrigger>
        <SelectContent className="">
          <SelectGroup>
            <SelectLabel className="uppercase font-thin text-yellow text-left">
              Filtering Type
            </SelectLabel>
            <SelectItem value="Table Only">From table only</SelectItem>
            <SelectItem value="All Characters">All characters</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <div className="flex flex-col md:flex-row">
        <Input
          placeholder={
            filterType === "Table Only"
              ? "Search by name in table"
              : "All characters by name"
          }
          value={
            filterType === "Table Only"
              ? (table.getColumn("name")?.getFilterValue() as string) ?? ""
              : searchName || ""
          }
          onChange={
            filterType === "Table Only"
              ? (event) =>
                  table.getColumn("name")?.setFilterValue(event.target.value)
              : (event) => setSearchName(event.target.value)
          }
          className="w-full md:w-[200px] bg-transparent text-white"
        />
        <Button
          variant="outline"
          onClick={() => handleSearch(searchName || "")}
          className={
            filterType === "Table Only"
              ? "hidden"
              : "block w-full md:w-[180px] "
          }
        >
          Search
        </Button>
      </div>
    </div>
  );
}
