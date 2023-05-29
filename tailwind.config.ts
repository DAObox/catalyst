/* eslint-disable @typescript-eslint/no-unsafe-call */
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "green": "#02AB76",
        "ash": "#94A3B8",
        "gray": "#101725",
        "gray-border": "#1E293B",
        "info-bg": "#070B13",
        "light-black": "#94A3B8"
      }
    },
  },
  plugins: [
    require("daisyui")
  ],
});
