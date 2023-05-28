/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { SearchIcon } from "@heroicons/react/outline";
import React, { Fragment, useState } from "react";
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/solid'

export default function DaoCards() {

    const chains = [
        { id: "1", label: "Ethereum", icon: "/logos/polygon.png" },
        { id: "3", label: "Polygon", icon: "/logos/polygon.png" },
        { id: "4", label: "BSC", icon: "/logos/polygon.png" },
        { id: "56", label: "Avalanche", icon: "/logos/polygon.png" },
        { id: "137", label: "Matic", icon: "/logos/polygon.png" },
        { id: "138", label: "Mumbai", icon: "/logos/polygon.png" },
        { id: "139", label: "Ropsten", icon: "/logos/polygon.png" },
        { id: "140", label: "Rinkeby", icon: "/logos/polygon.png" },
        { id: "141", label: "Kovan", icon: "/logos/polygon.png" },
        { id: "142", label: "Goerli", icon: "/logos/polygon.png" },
        { id: "143", label: "Parity", icon: "/logos/polygon.png" },
    ]

    function classNames(...classes: any[]) {
        return classes.filter(Boolean).join(' ')
    }

    const [selected, setSelected] = useState(chains[0])
    
    function handleChange(chain: any) {
        setSelected(chain)
    }

    return(
        <div>
            <div className="flex items-center w-full space-x-5">
                <div className="form-control w-full">
                    <div className="input-group w-full border-2 border-gray-border rounded-xl flex items-center">
                        <div className="p-2.5 bg-gray border-0">
                            <SearchIcon className="h-6 w-6 text-white" />
                        </div>
                        <input type="text" placeholder="Search…" className="input input-bordered w-full bg-gray border-0 text-white focus:outline-0" />
                    </div>
                </div>
                <div className="w-fit">
                    <Listbox value={chains} onChange={(e: any) => handleChange(e)}>
                        {({ open }) => (
                            <>
                                <div className="relative">
                                    <Listbox.Button className="relative w-full cursor-default rounded-md py-1.5 pl-3 pr-10 text-left text-gray-900 
                                    bg-gray border-2 border-gray-border sm:text-sm sm:leading-6 text-white hover:cursor-pointer">
                                        <span className="flex items-center space-x-1.5 w-full p-1.5">
                                            <img src={selected?.icon} alt="" className="h-5 w-5 flex-shrink-0 rounded-full" />
                                            <span className="block">{selected?.label}</span>
                                        </span>
                                        <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                            <ChevronDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                        </span>
                                    </Listbox.Button>

                                    <Transition
                                        show={open}
                                        as={Fragment}
                                        leave="transition ease-in duration-100"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                    <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-gray text-white
                                    py-1 text-base focus:outline-none sm:text-sm border-2 border-gray-border">
                                        {chains.map((chain) => (
                                        <Listbox.Option
                                            key={chain.id}
                                            className={({ active }) =>
                                                classNames(
                                                    active ? 'bg-green text-white' : 'text-gray-900',
                                                    'relative cursor-default select-none py-2 pl-3 pr-9 w-full hover:cursor-pointer'
                                                )
                                            }
                                            value={chain}
                                        >
                                            {({ selected, active }) => (
                                            <div className="w-full">
                                                <div className="flex items-center space-x-1">
                                                <img src={chain.icon} alt="" className="h-5 w-5 flex-shrink-0 rounded-full" />
                                                <span
                                                    className={classNames(selected ? 'font-semibold' : 'font-normal', 'block w-full')}
                                                >
                                                    {chain.label}
                                                </span>
                                                </div>

                                                {selected ? (
                                                <span
                                                    className={classNames(
                                                    active ? 'text-white' : 'text-green',
                                                    'absolute inset-y-0 right-0 flex items-center pr-4 hover:cursor-pointer'
                                                    )}
                                                >
                                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
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
            </div>
        </div>
    )
}