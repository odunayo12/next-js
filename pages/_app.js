// import "../styles/globals.css";
// #we could use this because we configured it in the next.config.js file else we would have used "../components/Header"
import Header from "components/Header";
// import next from "next";
import { ThemeProvider as TP } from "emotion-theming";

const theme = {
  colors: {
    primary: "#ff0000",
  },
};

function MyApp({ Component, pageProps }) {
  return (
    // "use empty tag instead of div"
    <>
      <TP theme={theme}>
        <Header />
        <Component {...pageProps} />
      </TP>
    </>
  );
}

export default MyApp;
