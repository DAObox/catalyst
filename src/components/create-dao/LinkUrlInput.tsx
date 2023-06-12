import { useRecoilState } from "recoil";
import { linkFieldsAtom } from "atoms/atoms";
import { type LinkInputType } from "typings/typings";
import { useState } from "react";

export default function LinkUrlInput({ className, value, placeholder, index }: LinkInputType) {
    const [linksField, setLinksField] = useRecoilState(linkFieldsAtom)
    const [inputValue, setInputValue] = useState(value)
    const handleInputTypeTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const nameInput = document.getElementById(`${index}-name`) as HTMLInputElement;
        const urlInput = document.getElementById(`${index}-link`) as HTMLInputElement;

        const newLinkFields = [...linksField];
        newLinkFields[index]?.name == nameInput.value
        newLinkFields[index]?.url == urlInput.value

        setLinksField(newLinkFields);
        setInputValue(e.target.value);
        // console.log("index: ", index, "name: ", nameInput.value, "url: ", urlInput.value)
        // console.log(newLinkFields)
    };
    return (
        <input
            type="text"
            className={`${className} p-4 mt-2 bg-dark-gray rounded-lg bg-transparent border border-gray-border outline-none placeholder:text-medium-gray`}
            placeholder={placeholder}
            id={`${index}-link`}
            value={inputValue}
            onChange={handleInputTypeTextChange}
        /> 
    )
}