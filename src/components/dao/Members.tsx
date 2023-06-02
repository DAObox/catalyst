import Image from "next/image"
import MintTokenButton from "../buttons/MintTokenButton"
import MemberCardGrid from "./members/MemberCardGrid"
import MembersFilter from "./members/MembersFilter"
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import GridButton from "../buttons/GridButton"
import ListButton from "../buttons/ListButton"
import { useRecoilValue } from "recoil"
import { listStyleAtom } from "atoms/atoms"
import MemberCardList from "./members/MemberCardList"

export default function Members() {
    const style = useRecoilValue(listStyleAtom)
    return (
        <div className="space-y-5">
            <div className="w-full bg-gray border border-gray-border p-5 rounded-xl flex items-center justify-between">
                <div className="text-lighter-gray">
                    <div className="flex items-center space-x-2.5">
                        <div>
                            <h1 className="text-6xl font-bold text-gray-900">10</h1>
                        </div>
                        <div>
                            <Image src={"/users-icon.png"} width={40} height={40} alt="users-icon" />
                        </div>
                    </div>
                    <div>
                        <p className="text-light-black">Wallet-based Members</p>
                    </div>
                </div>
                <div>
                    <MintTokenButton />
                </div>
            </div>
            <div className="w-full flex justify-between items-center">
                <div className="flex items-center max-w-2xl w-full space-x-5">
                    <div className="form-control flex-1">
                        <div className="input-group w-full border-2 border-gray-border rounded-xl flex items-center">
                            <div className="p-2.5 bg-gray border-0">
                                <MagnifyingGlassIcon className="h-6 w-6 text-white" />
                            </div>
                            <input type="text" placeholder="Search…" className="input input-bordered w-full bg-gray border-0 text-white focus:ring-0 focus:outline-0" />
                        </div>
                    </div>
                    <div className="max-w-fit flex space-x-5">
                        <MembersFilter />
                    </div>
                </div>
                <div className="flex items-center space-x-2.5">
                    <GridButton />
                    <ListButton />
                </div>
            </div>
            {
                style === "grid" ? (
                    <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-y-4 sm:gap-y-2 md:gap-y-4 sm:gap-x-2 md:gap-x-4">
                        <MemberCardGrid />
                        <MemberCardGrid />
                        <MemberCardGrid />
                        <MemberCardGrid />
                        <MemberCardGrid />
                        <MemberCardGrid />
                    </div>
                ) : (
                    <div className="flex flex-col space-y-5">
                        <MemberCardList />
                        <MemberCardList />
                        <MemberCardList />
                        <MemberCardList />
                        <MemberCardList />
                        <MemberCardList />
                    </div>
                )
            }
        </div>
    )
}