import Image from "next/image";
import Link from "next/link";

export default function SideNavigation() {
    return (
    <div>
        <div className="w-24 min-h-screen bg-ink border-r border-r-gray-border">
            <div className="h-full flex flex-col items-center py-5 space-y-10">
                <div>
                    <Link href={"/"}>
                        <Image src={"/logos/dao-d.png"} width={50} height={50} alt="logo" />
                    </Link>
                </div>
                <div>
                    <Image src={"/logos/rect-lg.png"} width={50} height={50} alt="logo" />
                </div>
            </div>
        </div>
    </div>
    )
}