import { type CreateDaoPageStatusProps } from "typings/typings";
import SelectBlockchain from "./steps/SelectBlockchain";
import AboutDao from "./steps/AboutDao";
import Governance from "./steps/Governance";
import { useRecoilValue } from "recoil";
import { createDaoStep } from "atoms/atoms";
import CreateDaoPageStatusRange from "./CreateDaoPageStatusRange";
import { useRouter } from "next/router";
import { createDaoStepNavigation } from "@/lib/constants";
import ConnectLensProfile from "./steps/ConnectLensProfile";

export default function CreateDaoPageStatus({ page }: CreateDaoPageStatusProps) {
    const step = useRecoilValue(createDaoStep)
    const router = useRouter()
    return (
        <div className="space-y-10">
            <CreateDaoPageStatusRange page={page} />
            <div className="space-y-4">
                <p className="text-lighter-gray text-xl">Steps:</p>
                <div className="space-y-5">
                    <SelectBlockchain current={step == 1 && router.pathname == createDaoStepNavigation[0] ? true : false} />
                    <AboutDao current={step == 2 && router.pathname == createDaoStepNavigation[1] ? true : false} />
                    <ConnectLensProfile current={step == 3 && router.pathname == createDaoStepNavigation[2] || router.pathname == createDaoStepNavigation[3] ? true : false} />
                    <Governance current={step == 4 && router.pathname == createDaoStepNavigation[5] ? true : false} />
                </div>
            </div>
        </div>
    )
}