import { type LinkFieldProps } from "typings/typings";
import { useRecoilState } from "recoil";
import { linkFieldsAtom } from "atoms/atoms";
import LinkNameInput from "./LinkNameInput";
import LinkUrlInput from "./LinkUrlInput";
import { handleRemoveLink } from "@/lib/functions";
import { TrashIcon } from "@heroicons/react/24/solid";

export default function LinkField({ index, name, url }: LinkFieldProps) {
    const [linksField, setLinksField] = useRecoilState(linkFieldsAtom)
    return (
        <div className="flex items-center space-x-1.5">
            <LinkNameInput placeholder="Name" className="w-48" value={name} index={index} linksField={linksField} setLinksField={setLinksField} />
            <LinkUrlInput placeholder="Link" className="w-full" value={url} index={index} linksField={linksField} setLinksField={setLinksField} />
            <button onClick={() => handleRemoveLink(linksField, index, setLinksField)}>
                <TrashIcon className="w-6 h-6 text-light-gray" />
            </button>
        </div>
    )
}