import { SearchIcon } from "@heroicons/react/outline";

export default function DaoCards() {
    return(
        <div>
            <div className="flex items-center w-full">
                <div className="form-control w-full">
                    <div className="input-group w-full border-2 border-gray-border rounded-xl flex items-center">
                        <div className="p-2.5 bg-gray border-0">
                            <SearchIcon className="h-6 w-6 text-white" />
                        </div>
                        <input type="text" placeholder="Search…" className="input input-bordered w-full bg-gray border-0 text-white focus:outline-0" />
                    </div>
                </div>
                <div>
                    <select className="select select-bordered w-full max-w-xs">
                        <option disabled selected>Normal</option>
                        <option>Normal Apple</option>
                        <option>Normal Orange</option>
                        <option>Normal Tomato</option>
                    </select>
                </div>
            </div>
        </div>
    )
}