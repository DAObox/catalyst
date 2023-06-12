import Image from "next/image";
import { type LinkFieldProps } from "typings/typings";
import { useRecoilState } from "recoil";
import { linkFieldsAtom } from "atoms/atoms";
import LinkNameInput from "./LinkNameInput";
import LinkUrlInput from "./LinkUrlInput";

export default function LinkField({ index, name, url }: LinkFieldProps) {
    const [linksField, setLinksField] = useRecoilState(linkFieldsAtom)
    const handleRemoveLink = () => {
        const newLinkFields = [...linksField];
        newLinkFields[index] = { name: "", url: "", removed: true };
        setLinksField(newLinkFields);
      };
    return (
        <div className="flex items-center space-x-1.5">
            <LinkNameInput placeholder="Name" className="w-48" value={name} index={index} />
            <LinkUrlInput placeholder="Link" className="w-full" value={url} index={index} />
            <button onClick={handleRemoveLink}>
                <Image src={"/trash.png"} width={25} height={25} alt="trash icon" />
            </button>
        </div>
    )
}