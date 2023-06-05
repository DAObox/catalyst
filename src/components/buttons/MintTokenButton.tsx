import { PlusIcon } from "@heroicons/react/24/solid";
import { Button } from "@material-tailwind/react";

export default function MintTokenButton() {
    return(
        <Button className="bg-green flex items-center space-x-1.5"><PlusIcon className="text-white w-6 h-6" />Mint Token</Button>
    )
}