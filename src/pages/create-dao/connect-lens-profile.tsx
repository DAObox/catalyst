import CreateDaoAppShell from "@/components/dao/create-dao/CreateDaoAppShell";
import LensIcon from "@/components/icons/LensIcon";
import { Button } from "@material-tailwind/react";
import { createDaoStep } from "atoms/atoms";
import Link from "next/link";
import { useRecoilState } from "recoil";

export default function ConnectLensProfile() {
    const [, setCurrent] = useRecoilState(createDaoStep)
    setCurrent(3)
    return (
        <CreateDaoAppShell>
            <Link href={"/create-dao/setup-superflow"}>
                <Button className="flex items-center space-x-1.5 bg-purple">
                    <span><LensIcon /></span>
                    <span>Connect Lens Profile</span>
                </Button>
            </Link>

        </CreateDaoAppShell>
    )
}