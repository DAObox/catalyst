import Image from "next/legacy/image";
import DashboardDelegateButton from "../../buttons/DashboardDelegateButton";
import { truncateAddress } from "@/lib/functions";

export default function TopDelegate() {
    return (
        <div className="space-y-2.5 py-2.5">
            <div className="flex items-center space-x-2">
                <div className="w-10 h-10 relative">
                    <Image src={"/avatar.png"} layout="fill" objectFit="cover" alt="icon" className="rounded-full" />
                </div>
                <div>
                    <p className="text-lighter-gray">{truncateAddress("0xA3Db2Cb625bAe87D12AD769C47791a04BA1e5b29")}</p>
                    <p className="uppercase text-light-black text-sm">999M ENS</p>
                </div>
                <div>
                    <DashboardDelegateButton />
                </div>
            </div>
            <div className="flex items-center space-x-2">
                <div>
                    <div className="w-8 h-8 relative">
                        <Image src={"/avatar.png"} layout="fill" objectFit="cover" alt="icon" className="rounded-full" />
                    </div>
                </div>
                <div>
                    <p className="text-light-black">Trusted by <span className="text-green">tony.eth</span></p>
                </div>
            </div>
        </div>
    )
}