import { Button } from "@material-tailwind/react";
import { PlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function CreateDao() {
    return(
        <Link href={"/create/select-blockchain"}>
            <Button className="bg-green px-5 py-4 rounded-xl text-white flex items-center gap-3">Create Dao <PlusIcon className="w-5 h-5" /></Button>
        </Link>
    )
}