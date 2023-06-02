import { Button } from "@material-tailwind/react";
import { listStyleAtom } from "atoms/atoms";
import Image from "next/image";
import { useRecoilState, useRecoilValue } from "recoil";

export default function ListButton() {
    const style = useRecoilValue(listStyleAtom)
    const [, setStyle] = useRecoilState(listStyleAtom)
    return(
        <div>
            <Button
                className="border border-gray-border bg-gray py-3.5"
                onClick={() => setStyle("list")}>
            <Image src={style == "list" ? "/list-light.png" : "/list-dark.png"} width={25} height={25} alt="icon" /></Button>
        </div>
    )
}