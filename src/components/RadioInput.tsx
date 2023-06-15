/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { useState } from "react";
import { handleRadioCheck } from "../lib/functions"
import { type RadioInputProps } from "typings/typings";

export default function RadioInput({ placeholder, customFunction, className }: RadioInputProps) {
    const [isChecked, setIsChecked] = useState(false)
    return (
        <div className={`flex justify-between items-center rounded-md hover:cursor-pointer ${className}`} onClick={() => {
            handleRadioCheck(isChecked, setIsChecked)
            customFunction()
        }}>
            <p className="text-light-black">{placeholder}</p>
            <div className="rounded-full border-2 border-green w-fit h-fit flex items-center">
                <div className={`w-2.5 h-2.5 m-0.5 rounded-full ${isChecked ? "bg-green" : "bg-transparent"}`} />
            </div>
        </div>
    )
}