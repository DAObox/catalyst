import Image from "next/image";

export default function HeartButton() {
  return (
    <button className="flex items-center space-x-0.5">
      <div>
        <Image src={"/heart.png"} width={12.5} height={12.5} alt="icon" />
      </div>
      <div>
        <p className="text-[10px] text-blue">10</p>
      </div>
    </button>
  );
}
