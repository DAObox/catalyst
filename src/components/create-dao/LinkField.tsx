import Image from "next/image";
import { type LinkFieldId } from "typings/typings";

export default function LinkField({ id }: LinkFieldId) {
    return (
        <div className="flex items-center space-x-1.5" id={id.toString()}>
            <input
                type="text"
                className="w-48 p-4 mt-2 bg-dark-gray rounded-lg bg-transparent border border-gray-border outline-none placeholder:text-medium-gray"
                placeholder="Name"
                id={`${id}-name}`}
            />
            <input
                type="text"
                className="w-full p-4 mt-2 bg-dark-gray rounded-lg bg-transparent border border-gray-border outline-none placeholder:text-medium-gray"
                placeholder="Link"
                id={`${id}-link}`}
            />
            <button onClick={() => document.getElementById(`${id}`)?.remove()}>
                <Image src={"/trash.png"} width={25} height={25} alt="trash icon" />
            </button>
        </div>
    )
}