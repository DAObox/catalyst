/* eslint-disable @typescript-eslint/restrict-template-expressions */
import Image from "next/image"
import Divider from "../../Divider"
import { useRecoilState } from "recoil"
import { filterProposalsAtom } from "atoms/atoms"
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid"
import DaoFilterDropDown from "./DaoFilterDropDown"

export default function DaoFilter() {
    const [filter, setFilter] = useRecoilState(filterProposalsAtom)
    return (
        <div className="w-full space-y-2">
            <div className="flex space-x-1 items-center">
                <div>
                    <Image src={"/logos/sort.png"} width={20} height={20} alt="icon" />
                </div>
                <div>
                    <p className="text-white">Filter</p>
                </div>
            </div>
            <div>
                <Divider />
            </div>
            <div className="text-white space-y-2">
                <p className={`hover:text-green hover:cursor-pointer w-fit ${filter === "" && "text-green"}`} onClick={() => {
                    setFilter("")
                }}>All</p>
                <p className={`hover:text-green hover:cursor-pointer w-fit ${filter === "active" && "text-green"}`} onClick={() => {
                    setFilter("active")
                }}>Active</p>
                <p className={`hover:text-green hover:cursor-pointer w-fit ${filter === "completed" && "text-green"}`} onClick={() => {
                    setFilter("completed")
                }}>Completed</p>
            </div>
            <div>
                <div className="form-control flex-1">
                    <div className="input-group w-full border-2 border-gray-border rounded-xl flex items-center">
                        <div className="px-2.5 py-1.5 bg-gray border-0">
                            <MagnifyingGlassIcon className="h-6 w-6 text-white" />
                        </div>
                        <input type="text" placeholder="Search…" className="input input-bordered w-full bg-gray border-0 text-white focus:ring-0 focus:outline-0" />
                    </div>
                </div>
            </div>
            <div>
                <DaoFilterDropDown />
            </div>
        </div>
    )
}