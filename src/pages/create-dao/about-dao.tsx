/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import CreateDaoAppShell from "@/components/dao/create-dao/CreateDaoAppShell";
import LinkFields from "@/components/dao/create-dao/LinkFields";
import { PlusIcon } from "@heroicons/react/24/solid";
import {
  createDaoStep,
  daoDescriptionAtom,
  daoNameAtom,
  daoLogoLocalUrlAtom,
  daoLogoUrlAtom,
} from "atoms/atoms";
import Image from "next/image";
import { useRef } from "react";
import { useRecoilState } from "recoil";

export default function AboutDao() {
  const [, setCurrent] = useRecoilState(createDaoStep);
  const [daoName, setDaoName] = useRecoilState(daoNameAtom);
  const [daoDescription, setDaoDescription] = useRecoilState(daoDescriptionAtom);
  const [localThumbnailUrl, setDaoThumbnailLocalUrl] = useRecoilState(daoLogoLocalUrlAtom);
  const [, setDaoThumbnailUrl] = useRecoilState(daoLogoUrlAtom);
  const ref = useRef() as React.MutableRefObject<HTMLInputElement>;
  setCurrent(2);
  return (
    <CreateDaoAppShell className="space-y-4">
      <div>
        <h2 className="text-2xl font-medium text-lighter-gray">DAO Name</h2>
        <input
          type="text"
          className="bg-dark-gray mt-2 w-full rounded-lg border border-gray-border bg-transparent p-4 outline-none placeholder:text-medium-gray"
          placeholder="Enter DAO Name"
          value={daoName}
          onChange={(e) => setDaoName(e.target.value)}
        />
      </div>
      <div>
        <h2 className="text-2xl font-medium text-lighter-gray">Description</h2>
        <textarea
          className="bg-dark-gray mt-2 h-32 w-full rounded-lg border border-gray-border bg-transparent p-4 outline-none placeholder:text-medium-gray"
          placeholder="What is the vision of the DAO? "
          onChange={(e) => setDaoDescription(e.target.value)}
          value={daoDescription}
        />
      </div>
      <div className="space-y-2 hover:cursor-pointer">
        <h2 className="text-2xl font-medium text-lighter-gray">
          Logo <span className="text-light-black">(Optional)</span>
        </h2>
        {localThumbnailUrl ? (
          <Image
            src={localThumbnailUrl}
            width={100}
            height={100}
            alt="logo"
            className="h-28 w-28 rounded-lg border border-gray-border object-fill object-center"
            onClick={() => {
              setDaoThumbnailLocalUrl("");
              setDaoThumbnailUrl("");
            }}
          />
        ) : (
          <div
            className="flex h-28 w-28 flex-col items-center justify-center rounded-lg border border-gray-border"
            onClick={() => ref.current?.click()}
          >
            <PlusIcon className="h-10 w-10 text-lighter-gray" />
          </div>
        )}
        <input
          type="file"
          className="hidden"
          ref={ref}
          onChange={(e: any) => {
            if (e.target.files !== null) {
              setDaoThumbnailLocalUrl(URL.createObjectURL(e.target.files[0]));
              setDaoThumbnailUrl(e.target.files[0]);
            }
          }}
        />
      </div>
      <div>
        <LinkFields />
      </div>
    </CreateDaoAppShell>
  );
}
