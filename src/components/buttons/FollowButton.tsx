import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { Button } from "@material-tailwind/react";

export default function FollowButton() {
    return(
        <Button className="flex justify-center items-center bg-trans-gray w-full py-3">
            <div className="flex items-center space-x-1.5">
                <p>Follow Lens Profile</p>
                <div><ArrowTopRightOnSquareIcon className="w-4 h-4 text-lighter-gray" /></div>
            </div>
        </Button>
    )
}