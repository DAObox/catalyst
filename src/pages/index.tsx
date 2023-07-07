import DaoCards from "@/components/DaoCards";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import type { NextPage } from "next";
import Head from "next/head";
import { Footer } from "@/components/Footer";

const Home: NextPage = () => {
  return (
    <div className="h-full w-full overflow-x-clip overflow-y-scroll bg-gradient-to-r from-[#1E203C] to-[#11121B]">
      <Head>
        <title>Catalyst</title>
      </Head>
      <main className="relative flex h-full min-h-screen w-full justify-center">
        <div className="absolute left-0 top-0 w-full">
          <div
            className="h-full min-h-[450px] w-[calc(100%)] rounded-br-full bg-[url('/blue-shade.png')] bg-cover 
						bg-center bg-no-repeat sm:w-[calc(75%)] md:w-[calc(50%)] lg:min-h-[600px]"
          />
        </div>
        <div className="relative w-full max-w-xs px-2.5 sm:max-w-xl sm:px-0 md:max-w-2xl lg:max-w-6xl lg:px-5 xl:px-0">
          <Navbar />
          <div className="absolute top-32 w-full space-y-10">
            <div className="w-full space-y-10 sm:space-y-14">
              <Hero />
              <DaoCards />
            </div>
            <Footer />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
