import { PlusIcon } from "@heroicons/react/24/solid";

export default function AddDaoSideCircularButton() {
  return (
    <div className="hover:cursor-pointer">
      <PlusIcon className="bg-info-b h-10 w-10 rounded-full p-2.5 text-light-gray ring-1 ring-blue" />
    </div>
  );
}
