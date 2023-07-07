import { type LinkInputType } from "typings/typings";
import { useState } from "react";
import { handleInputTypeNameChange } from "@/lib/functions";

export default function LinkNameInput({
  className,
  value,
  placeholder,
  index,
  linksField,
  setLinksField,
}: LinkInputType) {
  const [inputValue, setInputValue] = useState(value);
  return (
    <input
      type="text"
      className={`${className} bg-dark-gray mt-2 rounded-lg border border-gray-border bg-transparent p-4 outline-none placeholder:text-medium-gray`}
      placeholder={placeholder}
      id={`${index}-name`}
      value={inputValue}
      onChange={(e) =>
        handleInputTypeNameChange(e, linksField, index, setLinksField, setInputValue)
      }
    />
  );
}
