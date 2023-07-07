import { handleInputTypeDescriptionChange } from "@/lib/functions";
import { proposalDescription } from "atoms/atoms";
import { useState } from "react";
import { useRecoilState } from "recoil";

export default function InputTypeDescription() {
  const [description, setDescription] = useRecoilState(proposalDescription);
  const [inputDescription, setInputDescription] = useState(description);
  return (
    <textarea
      className="bg-dark-gray mt-2 h-32 w-full rounded-lg border border-gray-border bg-transparent p-4 outline-none placeholder:text-medium-gray"
      placeholder="Name of proposal"
      id="proposal-description"
      value={inputDescription}
      onChange={(e) => handleInputTypeDescriptionChange(e, setDescription, setInputDescription)}
    />
  );
}
