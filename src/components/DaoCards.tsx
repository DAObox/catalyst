import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import ChainsList from "./Chains";
import Filters from "./Filter";
import DaoCard from "./DaoCard";

export default function DaoCards() {
  return (
    <div className="space-y-10 lg:pr-10 xl:pr-0">
      <div className="flex w-full items-center space-x-5">
        <div className="form-control flex-1">
          <div className="input-group flex w-full items-center rounded-xl border-2 border-gray-border">
            <div className="border-0 bg-gray p-2.5">
              <MagnifyingGlassIcon className="h-6 w-6 text-white" />
            </div>
            <input
              type="text"
              placeholder="Search…"
              className="input-bordered input w-full border-0 bg-gray text-white focus:outline-0 focus:ring-0"
            />
          </div>
        </div>
        <div className="flex max-w-fit space-x-5">
          <ChainsList />
          <Filters />
        </div>
      </div>
      <div className="grid w-full gap-y-4 sm:grid-cols-2 sm:gap-x-2 sm:gap-y-2 md:gap-x-4 md:gap-y-4 lg:grid-cols-3">
        <DaoCard href={"/dashboard"} />
        <DaoCard href={"/dashboard"} />
        <DaoCard href={"/dashboard"} />
        <DaoCard href={"/dashboard"} />
        <DaoCard href={"/dashboard"} />
        <DaoCard href={"/dashboard"} />
      </div>
    </div>
  );
}
