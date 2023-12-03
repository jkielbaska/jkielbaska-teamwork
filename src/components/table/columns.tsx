import { ColumnDef } from "@tanstack/react-table";
import { Character } from "@/types/tCharacterResponse";

import { SortMenu } from "./SortMenu";
import { PlanetPopup } from "./PlanetPopup";

import { sortByPlanetName } from "@/lib/sorting";

export const columns: ColumnDef<Character>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return <SortMenu sortString column={column} title={"Name"} />;
    },
    cell: ({ row }) => {
      return (
        <div className="text-left font-semibold lg:text-xl lg:font-sw-outline">
          {row.getValue("name")}
        </div>
      );
    },
    sortingFn: "alphanumericCaseSensitive",
  },
  {
    accessorKey: "height",
    header: ({ column }) => {
      return <SortMenu column={column} title={"Height"} />;
    },
    cell: ({ row }) => {
      return <div className="text-center">{row.getValue("height")}</div>;
    },
    sortingFn: "alphanumeric",
  },
  {
    accessorKey: "mass",
    header: ({ column }) => <SortMenu column={column} title={"Mass"} />,
    cell: ({ row }) => {
      return <div className="text-center">{row.getValue("mass")}</div>;
    },
    sortingFn: "alphanumeric",
  },
  {
    accessorKey: "created",
    header: ({ column }) => <SortMenu column={column} title={"Created"} />,
    cell: ({ row }) => {
      const date = new Date(row?.original?.created || "");
      const localeDate = date.toLocaleDateString();
      const localeTime = date.toLocaleTimeString();
      return (
        <div className="text-right">
          <p>{localeDate}</p>
          <span className="text-xs">{localeTime}</span>
        </div>
      );
    },
    sortingFn: "datetime",
  },
  {
    accessorKey: "edited",
    header: ({ column }) => <SortMenu column={column} title={"Edited"} />,
    cell: ({ row }) => {
      const date = new Date(row?.original?.edited || "");
      const localeDate = date.toLocaleDateString();
      const localeTime = date.toLocaleTimeString();
      return (
        <div className="text-right">
          <p className="">{localeDate}</p>
          <span className="text-xs">{localeTime}</span>
        </div>
      );
    },
    sortingFn: "datetime",
  },
  {
    accessorKey: "planetname",
    header: ({ column }) => (
      <SortMenu sortString column={column} title={"Home"} />
    ),
    cell: ({ row }) => {
      const homeworldUrlParts = row?.original?.homeworld
        .split("/")
        .filter(Boolean);
      const planetId = homeworldUrlParts[homeworldUrlParts.length - 1];

      return <PlanetPopup planetId={planetId} />;
    },
    sortingFn: sortByPlanetName,
  },
];
