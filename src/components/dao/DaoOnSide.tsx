/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { getDaoId } from "@/lib/functions";
import Image from "next/image";
import Link from "next/link";
import { type DaoOnSideProps } from "typings/typings";

export default function DaoOnSide({ url, id }: DaoOnSideProps) {
  return (
    <div>
      <Link href={`/dashboard?id=${id}`}>
        <div className={`${id === getDaoId() && "ring-4 ring-green"} rounded-full`}>
          <Image src={url} width={40} height={40} alt="logo" />
        </div>
      </Link>
    </div>
  );
}
