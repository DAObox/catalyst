/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { chains } from "@/lib/constants";
import React, { Fragment, useState } from "react";

export default function ChainsList() {
    function classNames(...classes: any[]) {
        return classes.filter(Boolean).join(" ");
    }

    const [selected, setSelected] = useState(chains[0]);

    function handleChange(chain: any) {
        setSelected(chain);
    }

    return (
        <div>
            <Listbox value={chains} onChange={(e: any) => handleChange(e)}>
                {({ open }) => (
                    <>
                        <div className="relative">
                            <Listbox.Button
                                className="text-gray-900 relative w-full cursor-default rounded-md border-2 border-gray-border bg-gray py-1.5 
                                    pl-3 pr-10 text-left text-white hover:cursor-pointer sm:text-sm sm:leading-6"
                            >
                                <span className="flex w-28 items-center space-x-1.5 p-1.5">
                                    <Image
                                        src={selected?.icon || "/logos/polygon.png"}
                                        alt={`${selected?.label || ""} logo`}
                                        className="flex-shrink-0 rounded-full"
                                        width={20}
                                        height={20}
                                    />
                                    <span className="block">{selected?.label}</span>
                                </span>
                                <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                    <ChevronDownIcon
                                        className="text-gray-400 h-5 w-5"
                                        aria-hidden="true"
                                    />
                                </span>
                            </Listbox.Button>

                            <Transition
                                show={open}
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Listbox.Options
                                    className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md border-2 border-gray-border
                                    bg-gray py-1 text-base text-white focus:outline-none sm:text-sm"
                                >
                                    {chains.map((chain) => (
                                        <Listbox.Option
                                            key={chain.id}
                                            className={({ active }) =>
                                                classNames(
                                                    active ? "bg-green text-white" : "text-gray-900",
                                                    "relative w-full cursor-default select-none py-2 pl-3 pr-9 hover:cursor-pointer"
                                                )
                                            }
                                            value={chain}
                                        >
                                            {({ selected, active }) => (
                                                <div className="w-full">
                                                    <div className="flex items-center space-x-1">
                                                        <Image
                                                            src={chain?.icon || "/logos/polygon.png"}
                                                            alt={`${chain?.label || ""} logo`}
                                                            className="flex-shrink-0 rounded-full"
                                                            width={20}
                                                            height={20}
                                                        />
                                                        <span
                                                            className={classNames(
                                                                selected ? "font-semibold" : "font-normal",
                                                                "block w-full"
                                                            )}
                                                        >
                                                            {chain.label}
                                                        </span>
                                                    </div>

                                                    {selected ? (
                                                        <span
                                                            className={classNames(
                                                                active ? "text-white" : "text-green",
                                                                "absolute inset-y-0 right-0 flex items-center pr-4 hover:cursor-pointer"
                                                            )}
                                                        >
                                                            <CheckIcon
                                                                className="h-5 w-5"
                                                                aria-hidden="true"
                                                            />
                                                        </span>
                                                    ) : null}
                                                </div>
                                            )}
                                        </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                            </Transition>
                        </div>
                    </>
                )}
            </Listbox>
        </div>
    );
}
