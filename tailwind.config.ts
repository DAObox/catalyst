/* eslint-disable @typescript-eslint/no-unsafe-call */
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./src/**/*.{js,ts,jsx,tsx}", "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "green": "#02AB76",
        "ash": "#94A3B8",
        "gray": "#101725",
        "gray-border": "#1E293B",
        "info-bg": "#070B13",
        "light-black": "#94A3B8",
        "ink": "#081229",
        "blue": "#026BBB",
        "light-gray": "#CBD5E1",
        "lighter-gray": "#F8FAFC",
        "trans-blue": "#01365E",
        "trans-yellow": "#5E5A01",
        "dark-blue": "#08A4FF",
        "yellow": "#FFF508",
        "trans-green": "#01442F",
        "medium-gray": "#475569",
        "trans-gray": "#1E293B"
      }
    },
  },
  plugins: [
    require("daisyui")
  ],
});
