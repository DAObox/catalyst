import { type CreateDaoPageStatusProps } from "typings/typings";
import SelectBlockchain from "./steps/SelectBlockchain";
import AboutDao from "./steps/AboutDao";
import ConnectLensProfile from "./steps/ConnectLensProfile";
import Governance from "./steps/Governance";
import { useRecoilValue } from "recoil";
import { createDaoStep } from "atoms/atoms";
import CreateDaoPageStatusRange from "./CreateDaoPageStatusRange";

export default function CreateDaoPageStatus({ page }: CreateDaoPageStatusProps) {
    const step = useRecoilValue(createDaoStep)
    return (
        <div className="space-y-10">
            <CreateDaoPageStatusRange page={page} />
            <div className="space-y-4">
                <p className="text-lighter-gray text-xl">Steps:</p>
                <div className="space-y-5">
                    <SelectBlockchain current={step == 1 ? true : false} />
                    <AboutDao current={step == 2 ? true : false} />
                    <ConnectLensProfile current={step == 3 ? true : false} />
                    <Governance current={step == 4 ? true : false} />
                </div>
            </div>
        </div>
    )
}