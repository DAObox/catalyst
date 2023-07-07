/* eslint-disable @typescript-eslint/no-floating-promises */
import { useState } from "react";
import { CheckCircleIcon, ClipboardDocumentCheckIcon } from "@heroicons/react/24/outline";
import { type CopyButtonProps } from "typings/typings";

export default function CopyButton({ data }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 2500);
        navigator.clipboard.writeText(data);
      }}
    >
      {copied ? (
        <CheckCircleIcon className="h-5 w-5 text-green" />
      ) : (
        <ClipboardDocumentCheckIcon className="h-5 w-5 text-light-black" />
      )}
    </button>
  );
}
