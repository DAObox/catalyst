/* eslint-disable @typescript-eslint/restrict-template-expressions */
import DaoAppShell from "@/components/dao/DaoAppShell";
import Image from "next/image";
import MintTokenButton from "../components/buttons/MintTokenButton";
import MemberCardGrid from "../components/dao/members/MemberCardGrid";
import MembersFilter from "../components/dao/members/MembersFilter";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import GridButton from "../components/buttons/GridButton";
import ListButton from "../components/buttons/ListButton";
import { useRecoilValue } from "recoil";
import { listStyleAtom } from "atoms/atoms";
import MemberCardList from "../components/dao/members/MemberCardList";

export default function Members() {
  const style = useRecoilValue(listStyleAtom);
  return (
    <DaoAppShell currentPage="members">
      <div>
        <div className="flex w-full items-center justify-between rounded-xl border border-gray-border bg-gray p-5">
          <div className="text-lighter-gray">
            <div className="flex items-center space-x-2.5">
              <div>
                <h1 className="text-gray-900 text-6xl font-bold">10</h1>
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
        <div className="mt-[59px] flex w-full items-center justify-between">
          <div className="flex w-full max-w-2xl items-center space-x-5">
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
              <MembersFilter />
            </div>
          </div>
          <div className="flex items-center space-x-2.5">
            <GridButton />
            <ListButton />
          </div>
        </div>
        <div className={`${style === "grid" && "flex justify-center"} mt-[49px]`}>
          <div
            className={`${style === "grid" ? "lg:max-w-[732px]" : "lg:max-w-full"} xl:max-w-full`}
          >
            {style === "grid" ? (
              <div className="grid w-full place-items-center gap-y-4 sm:grid-cols-2 sm:gap-x-2 sm:gap-y-2 md:gap-x-4 md:gap-y-4 lg:gap-8 xl:grid-cols-3">
                <MemberCardGrid />
                <MemberCardGrid />
                <MemberCardGrid />
                <MemberCardGrid />
                <MemberCardGrid />
                <MemberCardGrid />
              </div>
            ) : (
              <div className="flex w-full flex-col space-y-5">
                <MemberCardList />
                <MemberCardList />
                <MemberCardList />
                <MemberCardList />
                <MemberCardList />
                <MemberCardList />
              </div>
            )}
          </div>
        </div>
      </div>
    </DaoAppShell>
  );
}
