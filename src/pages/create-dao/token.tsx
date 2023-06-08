import CreateDaoAppShell from "@/components/create-dao/CreateDaoAppShell";
import { createDaoStep } from "atoms/atoms";
import { useRecoilState } from "recoil";

export default function Token() {
    const [, setCurrent] = useRecoilState(createDaoStep)
    setCurrent(3)
    return(
        <CreateDaoAppShell>
            <div>Tokens</div>
        </CreateDaoAppShell>
    )
}