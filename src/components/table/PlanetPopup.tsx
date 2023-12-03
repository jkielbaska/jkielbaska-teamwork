import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { usePlanet } from "@/hooks/usePlanet";
import { SpinningLoader } from "../loaders/SpinningLoader";

export const PlanetPopup = ({ planetId }: { planetId: string }) => {
  const { data } = usePlanet({
    planetId,
  });

  return (
    <>
      {data ? (
        <Dialog>
          <DialogTrigger className="md:hover:text-yellow md:hover:uppercase md:hover:font-thin">
            {data?.name}
          </DialogTrigger>
          <DialogContent className="rounded-md border-2 border-zinc-700 w-11/12">
            <DialogHeader className="flex items-center">
              <DialogTitle className="font-sw-outline uppercase text-yellow text-3xl">
                {data?.name}
              </DialogTitle>
              <DialogDescription className="uppercase font-extralight">
                Check basic info about this planet.
              </DialogDescription>
            </DialogHeader>
            <ul className="flex flex-col items-center text-zinc-300">
              <li className="font-thin ">Diameter: {data?.diameter}</li>
              <li className="font-thin">Climate: {data?.climate}</li>
              <li className="font-thin ">Population: {data?.population}</li>
            </ul>
          </DialogContent>
        </Dialog>
      ) : (
        <SpinningLoader />
      )}
    </>
  );
};
