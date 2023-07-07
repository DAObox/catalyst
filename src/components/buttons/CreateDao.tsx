import { Button } from "@material-tailwind/react";
import { PlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function CreateDao() {
  return (
    <Link href={"/create-dao/select-blockchain"}>
      <Button className="flex items-center gap-3 rounded-xl bg-green px-5 py-4 text-white">
        Create Dao <PlusIcon className="h-5 w-5" />
      </Button>
    </Link>
  );
}
