import { handleInputTypeDescriptionChange } from "@/lib/functions";
import { proposalDescription } from "atoms/atoms";
import { useState } from "react";
import { useRecoilState } from "recoil";

export default function InputTypeDescription() {
    const [description, setDescription] = useRecoilState(proposalDescription)
    const [inputDescription, setInputDescription] = useState(description)
    return (
        <textarea className="w-full p-4 mt-2 bg-dark-gray rounded-lg bg-transparent border border-gray-border outline-none placeholder:text-medium-gray h-32"
            placeholder="Name of proposal" id="proposal-description" value={inputDescription} 
            onChange={e => handleInputTypeDescriptionChange(e, setDescription, setInputDescription)} />
    )
}