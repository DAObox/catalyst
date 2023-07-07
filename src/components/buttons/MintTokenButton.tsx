import { PlusIcon } from "@heroicons/react/24/solid";
import { Button } from "@material-tailwind/react";

export default function MintTokenButton() {
  return (
    <Button className="flex items-center space-x-1.5 bg-green">
      <PlusIcon className="h-6 w-6 text-white" />
      Mint Token
    </Button>
  );
}
