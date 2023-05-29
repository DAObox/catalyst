import DaoCards from "@/components/DaoCards";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import type { NextPage } from "next";
import Head from "next/head";
import { Footer } from "@/components/Footer";

const Home: NextPage = () => {
	return (
		<div className="bg-gradient-to-r from-[#1E203C] to-[#11121B] w-full">
			<Head>
				<title>Catalyst</title>
			</Head>
			<main className="w-full relative min-h-screen h-full flex justify-center">
				<div className="w-full absolute top-0 left-0">
					<div
						className="bg-[url('/blue-shade.png')] bg-no-repeat bg-center bg-cover w-[calc(100%)] sm:w-[calc(75%)] 
						md:w-[calc(50%)] h-full min-h-[450px] lg:min-h-[600px] rounded-br-full"
					/>
				</div>
				<div className="w-full relative px-2.5 sm:px-0 lg:px-5 xl:px-0 max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-6xl">
          			<Navbar />
					<div className="absolute top-32 w-full space-y-10 sm:space-y-14">
						<Hero />
						<DaoCards />
					</div>
					<div className="w-full absolute bottom-0 inset-x-0">
						<Footer />
					</div>
				</div>
			</main>
		</div>
	);
};

export default Home;