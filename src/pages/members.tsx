/* eslint-disable @typescript-eslint/restrict-template-expressions */
import DaoAppShell from "@/components/dao/DaoAppShell";
import Image from "next/image"
import MintTokenButton from "../components/buttons/MintTokenButton"
import MemberCardGrid from "../components/dao/members/MemberCardGrid"
import MembersFilter from "../components/dao/members/MembersFilter"
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import GridButton from "../components/buttons/GridButton"
import ListButton from "../components/buttons/ListButton"
import { useRecoilValue } from "recoil"
import { listStyleAtom } from "atoms/atoms"
import MemberCardList from "../components/dao/members/MemberCardList"

export default function Members() {
    const style = useRecoilValue(listStyleAtom)
    return(
        <DaoAppShell currentPage="members">
            <div>
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
                <div className="w-full flex justify-between items-center mt-[59px]">
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
                <div className={`${style === "grid" && "flex justify-center"} mt-[49px]`}>
                    <div className={`${style === "grid" ? "lg:max-w-[732px]" : "lg:max-w-full"} xl:max-w-full`}>
                        {
                            style === "grid" ? (
                                <div className="w-full grid sm:grid-cols-2 xl:grid-cols-3 gap-y-4 sm:gap-y-2 md:gap-y-4 sm:gap-x-2 md:gap-x-4 lg:gap-8 place-items-center">
                                    <MemberCardGrid />
                                    <MemberCardGrid />
                                    <MemberCardGrid />
                                    <MemberCardGrid />
                                    <MemberCardGrid />
                                    <MemberCardGrid />
                                </div>
                            ) : (
                                <div className="flex flex-col space-y-5 w-full">
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
                </div>
            </div>
        </DaoAppShell>
    )
}