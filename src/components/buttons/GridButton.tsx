/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Button } from "@material-tailwind/react";
import { listStyleAtom } from "atoms/atoms";
import Image from "next/image";
import { useRecoilState, useRecoilValue } from "recoil";

export default function GridButton() {
  const style = useRecoilValue(listStyleAtom);
  const [, setStyle] = useRecoilState(listStyleAtom);
  return (
    <div>
      <Button className="border border-gray-border bg-gray" onClick={() => setStyle("grid")}>
        <Image
          src={style == "grid" ? "/grid-light.png" : "/grid-dark.png"}
          width={25}
          height={25}
          alt="icon"
        />
      </Button>
    </div>
  );
}
