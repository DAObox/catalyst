import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

export default function DashboardSelectNavigation() {
  return (
    <div className="dropdown">
      <label tabIndex={0} className="border-0 bg-transparent hover:cursor-pointer">
        <div className="flex items-center space-x-1.5">
          <div className="rounded-sm bg-blue p-1">
            <Image src={"/dashboard.png"} width={12} height={12} alt="icon" />
          </div>
          <div>
            <p className="font-medium text-lighter-gray">Dashboard</p>
          </div>
          <div className="flex flex-col items-center justify-between">
            <ChevronUpIcon className="h-3 w-3 text-lighter-gray" />
            <ChevronDownIcon className="h-3 w-3 text-lighter-gray" />
          </div>
        </div>
      </label>
      <ul tabIndex={0} className="dropdown-content rounded-box mt-2 w-48 bg-gray p-2 shadow">
        <Link href="/dashboard">
          <button className="flex w-full items-center space-x-1.5 rounded-lg p-2.5 hover:bg-base-100/5 active:bg-base-100/5">
            <div className="shrink-0 rounded-sm bg-blue p-1">
              <Image src={"/dashboard.png"} width={12} height={12} alt="icon" />
            </div>
            <div>
              <p className="font-medium text-lighter-gray">Dashboard</p>
            </div>
          </button>
        </Link>
        <Link href="/governance">
          <button className="flex w-full items-center space-x-1.5 rounded-lg p-2.5 hover:bg-base-100/5 active:bg-base-100/5">
            <div className="shrink-0 rounded-sm p-1">
              <Image src={"/governance.png"} width={12} height={12} alt="icon" />
            </div>
            <div>
              <p className="font-medium text-lighter-gray">Governance</p>
            </div>
          </button>
        </Link>
        <Link href="/treasury">
          <button className="flex w-full items-center space-x-1.5 rounded-lg p-2.5 hover:bg-base-100/5 active:bg-base-100/5">
            <div className="shrink-0 rounded-sm p-1">
              <Image src={"/treasury.png"} width={12} height={12} alt="icon" />
            </div>
            <div>
              <p className="font-medium text-lighter-gray">Treasury</p>
            </div>
          </button>
        </Link>
        <Link href="/members">
          <button className="flex w-full items-center space-x-1.5 rounded-lg p-2.5 hover:bg-base-100/5 active:bg-base-100/5">
            <div className="shrink-0 rounded-sm p-1">
              <Image src={"/members.png"} width={12} height={12} alt="icon" />
            </div>
            <div>
              <p className="font-medium text-lighter-gray">Members</p>
            </div>
          </button>
        </Link>
        <Link href="/settings">
          <button className="flex w-full items-center space-x-1.5 rounded-lg p-2.5 hover:bg-base-100/5 active:bg-base-100/5">
            <div className="shrink-0 rounded-sm p-1">
              <Image src={"/settings.png"} width={12} height={12} alt="icon" />
            </div>
            <div>
              <p className="font-medium text-lighter-gray">Settings</p>
            </div>
          </button>
        </Link>
      </ul>
    </div>
  );
}
