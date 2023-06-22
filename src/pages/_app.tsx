import { type AppType } from "next/dist/shared/lib/utils";
import "@/styles/globals.css";
import { useEffect, useState } from "react";
import { Providers } from "./providers";

const MyApp: AppType = ({ Component, pageProps }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return <Providers>{mounted && <Component {...pageProps} />}</Providers>;
};

export default MyApp;
