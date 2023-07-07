import CreateNewProposalAppShell from "@/components/create-proposals/CreateNewProposalAppShell";
import { getLogoFromSymbol } from "@/lib/functions";
import {
  createProposalAmountAtom,
  createProposalRecepientAtom,
  createProposalStepAtom,
  selectCurrencyAtom,
} from "atoms/atoms";
import { useRecoilState, useRecoilValue } from "recoil";
import Image from "next/image";
import SelectCurrency from "@/components/SelectCurrency";
import { useState } from "react";

export default function WithdrawAsset() {
  const symbol = useRecoilValue(selectCurrencyAtom);
  const [, setStep] = useRecoilState(createProposalStepAtom);
  const [_recepient, _setRecepient] = useRecoilState(createProposalRecepientAtom);
  const [_amount, _setAmount] = useRecoilState(createProposalAmountAtom);
  const [recepient, setRecepient] = useState(_recepient);
  const [amount, setAmount] = useState(_amount);
  setStep(3);
  return (
    <CreateNewProposalAppShell className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-medium text-lighter-gray">Withdraw Assets</h2>
        <p className="text-lg text-light-black">
          Setting super follow makes user spend crypto to follow you, and it
          {"’"}s a good way to earn it.
        </p>
      </div>
      <div>
        <SelectCurrency />
      </div>
      <div className="space-y-3">
        <p className="text-lighter-gray">Recipient</p>
        <input
          type="text"
          className="w-full rounded-lg bg-gray-border p-4 text-lighter-gray outline-0"
          value={recepient}
          onChange={(e) => {
            setRecepient(e.target.value);
            _setRecepient(e.target.value);
          }}
        />
      </div>
      <div className="space-y-3">
        <p className="text-lighter-gray">Amount</p>
        <div className="flex items-center">
          <div className="rounded-l-lg bg-gray-border p-[18px]">
            <Image src={getLogoFromSymbol(symbol)} width={20} height={20} alt="token icon" />
          </div>
          <div className="w-full">
            <input
              type="number"
              placeholder="9"
              className="w-full rounded-r-lg bg-gray-border py-4 text-lighter-gray outline-0"
              value={amount}
              onChange={(e) => {
                setAmount(e.target.value);
                _setAmount(e.target.value.toString());
              }}
            />
          </div>
        </div>
      </div>
    </CreateNewProposalAppShell>
  );
}
