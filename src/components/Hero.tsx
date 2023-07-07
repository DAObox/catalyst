import { Button } from "@material-tailwind/react";
import CreateDao from "./buttons/CreateDao";

export default function Hero() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center space-y-5 text-center">
      <div className="flex w-full flex-col items-center justify-center text-center">
        <h1 className="max-w-2xl text-center text-2xl font-semibold text-white sm:text-4xl md:text-5xl 2xl:text-7xl">
          Explore DAOs,
        </h1>
        <h1 className="max-w-2xl text-center text-2xl font-semibold text-white sm:text-4xl md:text-5xl 2xl:text-7xl">
          Governanace
        </h1>
      </div>
      <div className="max-w-xl space-y-5">
        <p className="text-ash">
          Lorem ipsum dolor sit amet consectetur. Aliquam nunc neque nulla bibendum risus congue
          pretium cursus lacus. Sit aenean in vitae.
        </p>
        <div className="flex w-full items-center justify-center space-x-2.5">
          <div>
            <CreateDao />
          </div>
          <div>
            <Button
              variant="text"
              className="px-6 py-4 text-white hover:bg-green hover:shadow-lg hover:shadow-[#2196f366]"
            >
              About DAOs
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
