import { type AppType } from "next/dist/shared/lib/utils";
import { AppShell } from "../components/layout/AppShell";

import "@/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <AppShell>
      <Component {...pageProps} />
    </AppShell>
  );
};

export default MyApp;
