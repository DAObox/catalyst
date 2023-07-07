import { type StepProps } from "typings/typings";

export default function SelectBlockchain({ current }: StepProps) {
  return (
    <div
      className={`max-w-full p-10 ${
        current ? "bg-trans-gray" : "border border-medium-gray"
      } rounded-lg text-lighter-gray`}
    >
      <p className="text-center text-xl">
        Select <br /> Blockchain
      </p>
    </div>
  );
}
