import { truncateAddress } from "@/lib/functions";
import Image from "next/image";

export default function Voter() {
    return(
        <div className="flex items-center space-x-1.5">
            <div>
                <Image src={"/avatar.png"} width={40} height={40} alt="voter icon" className="rounded-full" />
            </div>
            <div>
                <p className="text-lighter-gray">{truncateAddress("0xA3Db2Cb625bAe87D12AD769C47791a04BA1e5b29")}</p>
            </div>
        </div>
    )
}