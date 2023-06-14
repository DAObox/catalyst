import { handleInputTypeTitleChange } from "@/lib/functions";
import { proposalTitle } from "atoms/atoms";
import { useState } from "react";
import { useRecoilState } from "recoil";

export default function InputTypeTitle() {
const [title, setTitle] = useRecoilState(proposalTitle)
const [inputTitle, setInputTitle] = useState(title)
    return (
        <input type="text" className="w-full p-4 mt-2 bg-dark-gray rounded-lg bg-transparent border border-gray-border outline-none placeholder:text-medium-gray"
            placeholder="Name of proposal" id="proposal-title" value={inputTitle} onChange={e => handleInputTypeTitleChange(e, setTitle, setInputTitle)} />
    )
}