import { useRecoilState } from "recoil";
import { linkFieldsAtom } from "atoms/atoms";
import { type LinkInputType } from "typings/typings";
import { useState } from "react";
import { handleInputTypeTextChange } from "@/lib/functions";

export default function LinkNameInput({ className, value, placeholder, index }: LinkInputType) {
    const [linksField, setLinksField] = useRecoilState(linkFieldsAtom)
    const [inputValue, setInputValue] = useState(value)
    return (
        <input
            type="text"
            className={`${className} p-4 mt-2 bg-dark-gray rounded-lg bg-transparent border border-gray-border outline-none placeholder:text-medium-gray`}
            placeholder={placeholder}
            id={`${index}-name`}
            value={inputValue}
            onChange={e => handleInputTypeTextChange(e, linksField, index, setLinksField, setInputValue)}
        /> 
    )
}