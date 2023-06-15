import { type LinkInputType } from "typings/typings";
import { useState } from "react";
import { handleInputTypeUrlChange } from "@/lib/functions";

export default function LinkUrlInput({ className, value, placeholder, index, linksField, setLinksField  }: LinkInputType) {
    const [inputValue, setInputValue] = useState(value)
    return (
        <input
            type="text"
            className={`${className} p-4 mt-2 bg-dark-gray rounded-lg bg-transparent border border-gray-border outline-none placeholder:text-medium-gray`}
            placeholder={placeholder}
            id={`${index}-link`}
            value={inputValue}
            onChange={(e) => handleInputTypeUrlChange(e, linksField, index, setLinksField, setInputValue)}
        /> 
    )
}