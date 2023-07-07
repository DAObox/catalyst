import Divider from "../../Divider";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import TopDelegate from "./TopDelegate";

export default function TopDelegates() {
  return (
    <div className="space-y-3">
      <div className="space-y-3">
        <h1 className="text-xl text-lighter-gray">Top Delegates</h1>
        <div>
          <Divider />
        </div>
      </div>
      <div className="divide-gray-200 scrollbar-hide max-h-96 divide-y overflow-y-scroll">
        <TopDelegate />
        <TopDelegate />
        <TopDelegate />
        <TopDelegate />
        <TopDelegate />
        <TopDelegate />
        <TopDelegate />
        <TopDelegate />
        <TopDelegate />
      </div>
      <Link href={"/members"}>
        <button className="group flex items-center space-x-1 text-light-black">
          <div>
            <p className="text-lg font-bold group-hover:text-green">All Members</p>
          </div>
          <div>
            <ChevronRightIcon className="h-6 w-6 group-hover:text-green" />
          </div>
        </button>
      </Link>
    </div>
  );
}
