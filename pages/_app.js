// import "../styles/globals.css";
// #we could use this because we configured it in the next.config.js file else we would have used "../components/Header"
import Header from "components/Header";
// import next from "next";
import { ThemeProvider as TP } from "emotion-theming";
import GlobalStyles from "../components/GlobalStyles/GlobalStyles";

const theme = {
  colors: {
    primary: "#efefef",
  },
};

function MyApp({ Component, pageProps }) {
  return (
    // "use empty tag instead of div"
    <>
      <TP theme={theme}>
        <GlobalStyles />
        {/* isDark is a prop in Header.js */}
        {/* remove isDark to change to light color */}
        <Header />
        <Component {...pageProps} />
      </TP>
    </>
  );
}

export default MyApp;
