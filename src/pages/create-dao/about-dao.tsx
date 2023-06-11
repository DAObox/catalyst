/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import CreateDaoAppShell from "@/components/create-dao/CreateDaoAppShell";
import LinkFields from "@/components/create-dao/LinkFields";
import { PlusIcon } from "@heroicons/react/24/solid";
import { createDaoStep, daoDescriptionAtom, daoNameAtom, daoLogoLocalUrlAtom, daoLogoUrlAtom } from "atoms/atoms";
import Image from "next/image";
import { useRef } from "react";
import { useRecoilState } from "recoil";

export default function AboutDao() {
    const [, setCurrent] = useRecoilState(createDaoStep)
    const [daoName, setDaoName] = useRecoilState(daoNameAtom)
    const [daoDescription, setDaoDescription] = useRecoilState(daoDescriptionAtom)
    const [localThumbnailUrl, setDaoThumbnailLocalUrl] = useRecoilState(daoLogoLocalUrlAtom)
    const [, setDaoThumbnailUrl] = useRecoilState(daoLogoUrlAtom)
    const ref = useRef() as React.MutableRefObject<HTMLInputElement>
    setCurrent(2)
    return (
        <CreateDaoAppShell className="space-y-4">
            <div>
                <h2 className="text-2xl font-medium text-lighter-gray">DAO Name</h2>
                <input type="text" className="w-full p-4 mt-2 bg-dark-gray rounded-lg bg-transparent border border-gray-border outline-none placeholder:text-medium-gray"
                    placeholder="Enter DAO Name" value={daoName} onChange={e => setDaoName(e.target.value)} />
            </div>
            <div>
                <h2 className="text-2xl font-medium text-lighter-gray">Description</h2>
                <textarea className="w-full p-4 mt-2 bg-dark-gray rounded-lg bg-transparent border border-gray-border outline-none h-32 placeholder:text-medium-gray"
                    placeholder="What is the vision of the DAO? " onChange={e => setDaoDescription(e.target.value)} value={daoDescription} />
            </div>
            <div className="space-y-2 hover:cursor-pointer">
                <h2 className="text-2xl font-medium text-lighter-gray">Logo <span className="text-light-black">(Optional)</span></h2>
                {
                    localThumbnailUrl ? <Image
                        src={localThumbnailUrl}
                        width={100} height={100}
                        alt="logo"
                        className="w-28 h-28 border border-gray-border rounded-lg object-center object-fill"
                        onClick={() => {
                            setDaoThumbnailLocalUrl("")
                            setDaoThumbnailUrl("")
                        }}
                    /> :
                        <div className="w-28 h-28 border border-gray-border rounded-lg flex flex-col items-center justify-center" onClick={() => ref.current?.click()}>
                            <PlusIcon className="w-10 h-10 text-lighter-gray" />
                        </div>
                }
                <input type="file" className="hidden" ref={ref} onChange={(e: any) => {
                    if (e.target.files !== null) {
                        setDaoThumbnailLocalUrl(URL.createObjectURL(e.target.files[0]))
                        setDaoThumbnailUrl(e.target.files[0])
                    }
                }} />
            </div>
            <div>
                <LinkFields />
            </div>
        </CreateDaoAppShell>
    )
}