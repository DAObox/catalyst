import Image from "next/image";
import { type LinkFieldId } from "typings/typings";
import { useRecoilState } from "recoil";
import { linkFieldsAtom } from "atoms/atoms";

export default function LinkField({ id }: LinkFieldId) {
    const [linkFields, setLinkFields] = useRecoilState(linkFieldsAtom)
    return (
        <div className="flex items-center space-x-1.5" id={id.toString()}>
            <input
                type="text"
                className="w-48 p-4 mt-2 bg-dark-gray rounded-lg bg-transparent border border-gray-border outline-none placeholder:text-medium-gray"
                placeholder="Name"
                id={`${id}-name`}
                onChange={(e) => {
                    const name = document.getElementById(e.target.id) as HTMLInputElement
                    const url = document.getElementById(`${id}-link`) as HTMLInputElement
                    const newLinkFields = [...linkFields]
                    newLinkFields[0] = { name: name?.value, url: url.value, removed: false }
                    setLinkFields(newLinkFields)
                }}
            />
            <input
                type="text"
                className="w-full p-4 mt-2 bg-dark-gray rounded-lg bg-transparent border border-gray-border outline-none placeholder:text-medium-gray"
                placeholder="Link"
                id={`${id}-link`}
                onChange={(e) => {
                    const link = document.getElementById(e.target.id) as HTMLInputElement
                    const name = document.getElementById(`${id}-name`) as HTMLInputElement
                    const newLinkFields = [...linkFields]
                    newLinkFields[0] = { name: name.value, url: link.value, removed: false }
                    setLinkFields(newLinkFields)
                }}
            />
            <button onClick={() => {
                const newLinkFields = [...linkFields]
                const name = document.getElementById(`${id}-name`) as HTMLInputElement
                const url = document.getElementById(`${id}-link`) as HTMLInputElement
                newLinkFields[id-1] = { name: name.value, url: url.value, removed: true }
                setLinkFields(newLinkFields)
                document.getElementById(`${id}`)?.remove()
            }}>
                <Image src={"/trash.png"} width={25} height={25} alt="trash icon" />
            </button>
        </div>
    )
}