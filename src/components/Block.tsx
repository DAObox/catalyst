/* eslint-disable @typescript-eslint/restrict-template-expressions */
import Image from "next/image";
import { type BlockProps } from "typings/typings";

export default function Block({ text, className, url }: BlockProps) {
  return (
    <div
      className={`${className} flex w-fit items-center space-x-1.5 rounded-md px-5 py-2.5 text-light-gray`}
    >
      <p>{text}</p>
      {url != null && <Image src={url} width={20} height={20} alt="icon" />}
    </div>
  );
}
