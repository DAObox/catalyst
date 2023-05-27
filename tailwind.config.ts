/* eslint-disable @typescript-eslint/no-unsafe-call */
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'green': "#02AB76"
      }
    },
  },
  plugins: [],
});
