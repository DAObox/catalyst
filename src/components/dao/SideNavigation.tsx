import Image from "next/image";
import Link from "next/link";
import DaoOnSide from "./DaoOnSide";
import AddDaoSideCircularButton from "../buttons/AddDaoSideCircularButton";

export default function SideNavigation() {
  return (
    <div>
      <div className="min-h-screen w-24 border-r border-r-gray-border bg-ink">
        <div className="flex h-full flex-col items-center space-y-10 py-5">
          <div>
            <Link href={"/"}>
              <Image src={"/logos/dao-d.png"} width={50} height={50} alt="logo" />
            </Link>
          </div>
          <div className="space-y-5">
            <DaoOnSide url="/logos/lens.png" id={""} />
            <DaoOnSide url="/logos/lens.png" id={"hehehehe"} />
            <DaoOnSide url="/logos/lens.png" id={"huhuhuhu"} />
            <DaoOnSide url="/logos/lens.png" id={"hahahaha"} />
            <AddDaoSideCircularButton />
          </div>
        </div>
      </div>
    </div>
  );
}
