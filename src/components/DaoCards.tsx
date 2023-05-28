import { SearchIcon } from "@heroicons/react/outline";
import ChainsList from "./Chains";
import Filters from "./Filter";

export default function DaoCards() {
    return(
        <div>
            <div className="flex items-center w-full space-x-5">
                <div className="form-control w-full">
                    <div className="input-group w-full border-2 border-gray-border rounded-xl flex items-center">
                        <div className="p-2.5 bg-gray border-0">
                            <SearchIcon className="h-6 w-6 text-white" />
                        </div>
                        <input type="text" placeholder="Search…" className="input input-bordered w-full bg-gray border-0 text-white focus:outline-0" />
                    </div>
                </div>
                <div className="w-fit flex space-x-5">
                    <ChainsList />
                    <Filters />
                </div>
            </div>
        </div>
    )
}