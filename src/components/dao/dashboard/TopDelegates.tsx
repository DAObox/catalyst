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
            <div className="divide-y divide-gray-200 max-h-96 overflow-y-scroll scrollbar-hide">
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
                <button className="text-light-black flex space-x-1 items-center group">
                    <div>
                        <p className="text-lg font-bold group-hover:text-green">All Members</p>
                    </div>
                    <div>
                        <ChevronRightIcon className="w-6 h-6 group-hover:text-green" />
                    </div>
                </button>
            </Link>
        </div>
    )
}