/* eslint-disable @typescript-eslint/no-floating-promises */
import { useState } from "react";
import { CheckBadgeIcon, ClipboardDocumentCheckIcon } from "@heroicons/react/24/outline";
import { type CopyButtonProps } from "typings/typings";

export default function CopyButton({ data }: CopyButtonProps ) {
    const [copied, setCopied] = useState(false)
    return(
        <button onClick={() => {
            setCopied(true)
            setTimeout(() => {
                setCopied(false)
            }, 2500);
            navigator.clipboard.writeText(data)
        }}>
            {
                copied ? <CheckBadgeIcon className="w-5 h-5 text-green" /> : <ClipboardDocumentCheckIcon className="text-light-black w-5 h-5" />
            }
        </button>
    )
}