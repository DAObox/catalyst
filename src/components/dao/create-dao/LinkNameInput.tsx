import { type LinkInputType } from "typings/typings";
import { useState } from "react";
import { handleInputTypeNameChange } from "@/lib/functions";

export default function LinkNameInput({ className, value, placeholder, index, linksField, setLinksField }: LinkInputType) {
    const [inputValue, setInputValue] = useState(value)
    return (
        <input
            type="text"
            className={`${className} p-4 mt-2 bg-dark-gray rounded-lg bg-transparent border border-gray-border outline-none placeholder:text-medium-gray`}
            placeholder={placeholder}
            id={`${index}-name`}
            value={inputValue}
            onChange={e => handleInputTypeNameChange(e, linksField, index, setLinksField, setInputValue)}
        /> 
    )
}