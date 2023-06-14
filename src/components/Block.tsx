/* eslint-disable @typescript-eslint/restrict-template-expressions */
import Image from "next/image";
import { type BlockProps } from "typings/typings";

export default function Block({ text, className, url }: BlockProps) {
    return(
        <div className={`${className} py-2.5 px-5 flex items-center space-x-1.5 w-fit text-light-gray rounded-md`}>
            <p>{text}</p>
            {
                url != null && <Image src={url} width={20} height={20} alt="icon" />
            }
        </div>
    )
}