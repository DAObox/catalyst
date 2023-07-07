import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { Button } from "@material-tailwind/react";

export default function FollowButton() {
  return (
    <Button className="flex w-full items-center justify-center bg-trans-gray py-3">
      <div className="flex items-center space-x-1.5">
        <p>Follow Lens Profile</p>
        <div>
          <ArrowTopRightOnSquareIcon className="h-4 w-4 text-lighter-gray" />
        </div>
      </div>
    </Button>
  );
}
