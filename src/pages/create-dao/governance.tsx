import CreateDaoAppShell from "@/components/create-dao/CreateDaoAppShell";
import { createDaoStep } from "atoms/atoms";
import { useRecoilState } from "recoil";

export default function Governance() {
    const [, setCurrent] = useRecoilState(createDaoStep)
    setCurrent(4)
    return(
        <CreateDaoAppShell>
            Governance
        </CreateDaoAppShell>
    )
}