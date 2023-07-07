/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { useState } from "react";
import { handleRadioCheck } from "../lib/functions";
import { type RadioInputProps } from "typings/typings";

export default function RadioInput({
  placeholder,
  customFunction,
  className,
  checked,
}: RadioInputProps) {
  const [isChecked, setIsChecked] = useState(checked);
  return (
    <div
      className={`flex items-center justify-between rounded-md hover:cursor-pointer ${className}`}
      onClick={() => {
        handleRadioCheck(isChecked, setIsChecked);
        customFunction();
      }}
    >
      <p className="text-light-black">{placeholder}</p>
      <div className="flex h-fit w-fit items-center rounded-full border-2 border-green">
        <div
          className={`m-0.5 h-2.5 w-2.5 rounded-full ${isChecked ? "bg-green" : "bg-transparent"}`}
        />
      </div>
    </div>
  );
}
