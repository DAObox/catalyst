import Button from "@material-tailwind/react/components/Button";
import Image from "next/image";

export default function DelegateButton() {
    return(
        <Button className="flex justify-center items-center bg-green w-full py-3">
            <div className="flex items-center space-x-1.5">
                <p>Follow Lens Profile</p>
                <div>
                    <Image src={"/voting-light.png"} width={15} height={15} alt="icon" />
                </div>
            </div>
        </Button>
    )
}