import { type LinkInputType } from "typings/typings";
import { useState } from "react";
import { handleInputTypeUrlChange } from "@/lib/functions";

export default function LinkUrlInput({
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
      id={`${index}-link`}
      value={inputValue}
      onChange={(e) => handleInputTypeUrlChange(e, linksField, index, setLinksField, setInputValue)}
    />
  );
}
