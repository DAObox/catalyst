import { Button } from "@material-tailwind/react";
import CreateDao from "./buttons/CreateDao";

export default function Hero() {
    return (
      <div className="w-full relative space-y-5 flex flex-col items-center justify-center text-center">
        <div className="w-full text-center flex flex-col items-center justify-center">
          <h1 className="text-2xl sm:text-4xl md:text-5xl 2xl:text-7xl font-semibold max-w-2xl text-center text-white">Explore DAOs,</h1>
          <h1 className="text-2xl sm:text-4xl md:text-5xl 2xl:text-7xl font-semibold max-w-2xl text-center text-white">Governanace</h1>
        </div>
        <div className="max-w-xl space-y-5">
          <p className="text-ash">Lorem ipsum dolor sit amet consectetur. Aliquam nunc neque nulla bibendum risus congue pretium cursus lacus. Sit aenean in vitae.</p>
          <div className="w-full flex items-center justify-center space-x-2.5">
            <div>
              <CreateDao />
            </div>
            <div>
              <Button variant="text" className="text-white px-6 py-4 hover:bg-green">About DAOs</Button>
            </div>
          </div>
        </div>
      </div>
    )
}