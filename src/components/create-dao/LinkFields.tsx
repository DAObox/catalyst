import PlusIcon from "@heroicons/react/24/solid/PlusIcon"
import { Button } from "@material-tailwind/react"
import LinkField from "./LinkField"
import { useRecoilState } from "recoil";
import { daoLinksAtom, linkFieldsAtom } from "atoms/atoms";
import { handleCreateNewField } from "@/lib/functions";

export default function LinkFields() {
    const [linksField, setLinksField] = useRecoilState(linkFieldsAtom)
    return (
        <div className="space-y-4">
            <div>
                <h2 className="text-2xl font-medium text-lighter-gray">Link <span className="text-light-black">(Optional)</span></h2>
            </div>
            <div id="link-parent">
                {
                    linksField.map((linkField, index) => (
                        linkField.removed == false && <LinkField key={index} index={index} name={linkField.name} url={linkField.url} />
                    ))
                }
            </div>
            <div>
                <Button
                    onClick={() => handleCreateNewField(linksField, setLinksField)}
                    className="flex items-center space-x-1 bg-gray">
                    <span>Add More</span> <PlusIcon className="w-5 h-5" />
                </Button >
            </div>
        </div>
    )
}