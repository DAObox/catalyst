import { handleInputTypeTitleChange } from "@/lib/functions";
import { proposalTitle } from "atoms/atoms";
import { useState } from "react";
import { useRecoilState } from "recoil";

export default function InputTypeTitle() {
  const [title, setTitle] = useRecoilState(proposalTitle);
  const [inputTitle, setInputTitle] = useState(title);
  return (
    <input
      type="text"
      className="bg-dark-gray mt-2 w-full rounded-lg border border-gray-border bg-transparent p-4 outline-none placeholder:text-medium-gray"
      placeholder="Name of proposal"
      id="proposal-title"
      value={inputTitle}
      onChange={(e) => handleInputTypeTitleChange(e, setTitle, setInputTitle)}
    />
  );
}
