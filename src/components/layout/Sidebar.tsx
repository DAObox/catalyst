/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import logo from "../../../public/logos/daobox.png";
import {
  HomeIcon,
  UsersIcon,
  FolderIcon,
  QueueListIcon,
} from "@heroicons/react/24/outline";
import { getWindow } from "../../lib/window";
import Link from "next/link";
import { classNames } from "@/lib/functions";

const navigation = [
  {
    name: "Dashboard",
    href: "/",
    icon: HomeIcon,
    current: getWindow()?.location.pathname == "/",
  },
  {
    name: "Members",
    href: "/members",
    icon: UsersIcon,
    current: (getWindow()?.location.pathname ?? "").includes("/members"),
  },
  {
    name: "Treasury",
    href: "/treasury",
    icon: FolderIcon,
    current: (getWindow()?.location.pathname ?? "").includes("/treasury"),
  },
  {
    name: "Lens Voting",
    href: "/lens-voting",
    icon: QueueListIcon,
    current: (getWindow()?.location.pathname ?? "").includes("/lens-voting"),
  },
];

export function Sidebar() {
  return (
    <div className="bg-secondary flex grow flex-col gap-y-5 overflow-y-auto px-6 pb-4">
      <div className="flex h-16 shrink-0 items-center">
        <Image
          src={logo}
          alt="DAOBox Logo"
          width={300}
          className="block h-8 w-auto"
        />
      </div>
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {navigation.map((item, index) => (
                <li key={item.name + `${index}`}>
                  <Link
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-daoboxg text-black"
                        : "text-primary hover:bg-daoboxg hover:text-black",
                      "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"
                    )}
                  >
                    <item.icon
                      className={classNames(
                        item.current
                          ? "text-black"
                          : "text-primary group-hover:text-black",
                        "h-6 w-6 shrink-0"
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li className="mt-auto">
            <Link
              href="#"
              className="text-primary hover:bg-daoboxg hover:text-primary group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"
            >
              <Cog6ToothIcon
                className="text-primary group-hover:text-primary h-6 w-6 shrink-0"
                aria-hidden="true"
              />
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
