import { SearchIcon } from "@heroicons/react/outline";
import ChainsList from "./Chains";
import Filters from "./Filter";
import DaoCard from "./DaoCard";

export default function DaoCards() {
    return(
        <div className="lg:pr-10 xl:pr-0 space-y-10">
            <div className="flex items-center w-full space-x-5">
                <div className="form-control flex-1">
                    <div className="input-group w-full border-2 border-gray-border rounded-xl flex items-center">
                        <div className="p-2.5 bg-gray border-0">
                            <SearchIcon className="h-6 w-6 text-white" />
                        </div>
                        <input type="text" placeholder="Search…" className="input input-bordered w-full bg-gray border-0 text-white focus:ring-0 focus:outline-0" />
                    </div>
                </div>
                <div className="max-w-fit flex space-x-5">
                    <ChainsList />
                    <Filters />
                </div>
            </div>
            <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-y-4 sm:gap-y-2 md:gap-y-4 sm:gap-x-2 md:gap-x-4">
                <DaoCard href={"/daos/dao"} />
                <DaoCard href={"/daos/dao"} />
                <DaoCard href={"/daos/dao"} />
                <DaoCard href={"/daos/dao"} />
                <DaoCard href={"/daos/dao"} />
                <DaoCard href={"/daos/dao"} />
            </div>
        </div>
    )
}