import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { classNames, getCurrency } from "@/lib/functions";
import { useRecoilState } from "recoil";
import { selectCurrencyAtom } from "atoms/atoms";
import { currencies } from "@/lib/constants";

export default function SelectCurrency() {
  const [currency, setCurrency] = useRecoilState(selectCurrencyAtom);

  return (
    <Listbox
      value={currency}
      onChange={(data) => {
        setCurrency(getCurrency(data, setCurrency));
      }}
    >
      {({ open }) => (
        <>
          <Listbox.Label className="text-base text-lighter-gray">Select Currency</Listbox.Label>
          <div className="relative mt-2">
            <Listbox.Button className="flex w-full items-center justify-between rounded-lg bg-gray-border p-4 text-lighter-gray">
              <span className="block truncate">{currency}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon className="text-gray-400 h-5 w-5" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options
                className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-gray py-1 text-lighter-gray shadow-lg 
              ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
              >
                {currencies.map((currency) => (
                  <Listbox.Option
                    key={currency.id}
                    className={({ active }) =>
                      classNames(
                        active ? "bg-green text-lighter-gray" : "text-gray-900",
                        "relative cursor-pointer select-none py-2 pl-3 pr-9"
                      )
                    }
                    value={currency.blockchain}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={classNames(
                            selected ? "font-semibold" : "font-normal",
                            "block truncate"
                          )}
                        >
                          {currency.name}
                        </span>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? "text-lighter-gray" : "text-green",
                              "absolute inset-y-0 right-0 flex items-center pr-4"
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}
