import { type CreateDaoPageStatusProps } from "typings/typings";
import SelectBlockchain from "./steps/SelectBlockchain";
import AboutDao from "./steps/AboutDao";
import ConnectLensProfile from "./steps/ConnectLensProfile";
import Governance from "./steps/Governance";

export default function CreateDaoPageStatus({ page }: CreateDaoPageStatusProps) {
    return (
        <div className="space-y-10">
            <div className="flex items-center space-x-1.5">
                <div className="w-full bg-trans-gray h-2 rounded-full">
                    <div className="h-2 bg-green rounded-full" style={{ width: `${(page / 4) * 100}%` }} />
                </div>
                <p className="text-white font-medium">{page}/4</p>
            </div>
            <div className="space-y-4">
                <p className="text-lighter-gray text-xl">Steps:</p>
                <div className="space-y-5">
                    <SelectBlockchain current={true} />
                    <AboutDao current={false} />
                    <ConnectLensProfile current={false} />
                    <Governance current={false} />
                </div>
            </div>
        </div>
    )
}