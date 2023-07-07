import Image from "next/image";

export default function TokenItem() {
  return (
    <div className="flex w-full items-center justify-between p-5">
      <div className="flex items-center space-x-2.5">
        <div>
          <Image src={"/logos/ethereum.png"} width={50} height={50} alt="token-icon" />
        </div>
        <div>
          <p className="text-xl text-lighter-gray">Ethereum</p>
          <p className="text-light-black">ETH</p>
        </div>
      </div>
      <div className="text-end">
        <p className="text-xl text-lighter-gray">0</p>
        <p className="text-light-black">$0.00</p>
      </div>
    </div>
  );
}
