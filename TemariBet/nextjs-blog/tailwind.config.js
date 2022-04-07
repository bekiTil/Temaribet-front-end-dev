module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Configure your color palette here
         'pro-yellow':'#fed607',
        },
      fontFamily: {
        fugasOne: ["fugasOne", "serif"],
        typograhica:["typograhica","sanserif"],
        minionPro:["minionPro","serif"]
      },
    },
  },
  plugins: [],
};
