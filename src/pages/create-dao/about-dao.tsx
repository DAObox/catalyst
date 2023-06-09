/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import CreateDaoAppShell from "@/components/create-dao/CreateDaoAppShell";
import { PlusIcon } from "@heroicons/react/24/solid";
import { Button } from "@material-tailwind/react";
import { createDaoStep } from "atoms/atoms";
import Image from "next/image";
import { useRef, useState } from "react";
import { useRecoilState } from "recoil";

export default function AboutDao() {
    const [, setCurrent] = useRecoilState(createDaoStep)
    const [logo, setLogo] = useState<Blob | MediaSource>()
    const ref = useRef() as React.MutableRefObject<HTMLInputElement>
    setCurrent(2)
    return (
        <CreateDaoAppShell className="space-y-4">
            <div>
                <h2 className="text-2xl font-medium text-lighter-gray">DAO Name</h2>
                <input type="text" className="w-full p-4 mt-2 bg-dark-gray rounded-lg bg-transparent border border-gray-border outline-none placeholder:text-medium-gray"
                    placeholder="Enter DAO Name" />
            </div>
            <div>
                <h2 className="text-2xl font-medium text-lighter-gray">Description</h2>
                <textarea className="w-full p-4 mt-2 bg-dark-gray rounded-lg bg-transparent border border-gray-border outline-none h-32 placeholder:text-medium-gray"
                    placeholder="What is the vision of the DAO? " />
            </div>
            <div className="space-y-2 hover:cursor-pointer">
                <h2 className="text-2xl font-medium text-lighter-gray">Logo <span className="text-light-black">(Optional)</span></h2>
                {
                    logo ? <Image
                        src={URL.createObjectURL(logo)}
                        width={100} height={100}
                        alt="logo"
                        className="w-28 h-28 border border-gray-border rounded-lg object-center object-fill"
                        onClick={() => setLogo(undefined)}
                    /> :
                        <div className="w-28 h-28 border border-gray-border rounded-lg flex flex-col items-center justify-center" onClick={() => ref.current?.click()}>
                            <PlusIcon className="w-10 h-10 text-lighter-gray" />
                        </div>
                }
                <input type="file" className="hidden" ref={ref} onChange={e => e.target.files !== null && setLogo(e.target.files[0])} />
            </div>
            <div>
                <h2 className="text-2xl font-medium text-lighter-gray">Link <span className="text-light-black">(Optional)</span></h2>
                <div className="flex items-center space-x-1.5">
                    <input
                        type="text"
                        className="w-48 p-4 mt-2 bg-dark-gray rounded-lg bg-transparent border border-gray-border outline-none placeholder:text-medium-gray"
                        placeholder="Name"
                    />
                    <input
                        type="text"
                        className="w-full p-4 mt-2 bg-dark-gray rounded-lg bg-transparent border border-gray-border outline-none placeholder:text-medium-gray"
                        placeholder="Link"
                    />
                </div>
            </div>
            <Button className="flex items-center space-x-1 bg-gray"><span>Add More</span> <PlusIcon className="w-5 h-5" /></Button>
        </CreateDaoAppShell>
    )
}