import PlusIcon from "@heroicons/react/24/solid/PlusIcon"
import { Button } from "@material-tailwind/react"
import LinkField from "./LinkField"
import { createLinkField } from "@/lib/functions"
import { useRecoilState } from "recoil";
import { numberOfLinkFields } from "atoms/atoms";

export default function LinkFields() {
    const [, setLinkFields] = useRecoilState(numberOfLinkFields)
    return (
        <div className="space-y-4">
            <div>
                <h2 className="text-2xl font-medium text-lighter-gray">Link <span className="text-light-black">(Optional)</span></h2>
            </div>
            <div id="link-parent">
                <LinkField id={1} />
            </div>
            <div>
                <Button
                    onClick={() => createLinkField(1, setLinkFields)}
                    className="flex items-center space-x-1 bg-gray">
                    <span>Add More</span> <PlusIcon className="w-5 h-5" />
                </Button >
            </div>
        </div>
    )
}