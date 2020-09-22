// import "../styles/globals.css";
// #we could use this because we configured it in the next.config.js file else we would have used "../components/Header"
import Header from "components/Header";
// import next from "next";
import { ThemeProvider as TP } from "emotion-theming";
import GlobalStyles from "components/GlobalStyles/GlobalStyles";
import theme from "../theme/theme.js";
import getConfig from "next/config";
import fetch from "isomorphic-unfetch";

const MyApp = ({ Component, pageProps, navigation }) => {
  console.log(navigation);
  return (
    // "use empty tag instead of div"
    <>
      <TP theme={theme}>
        <GlobalStyles />
        {/* isDark is a prop in Header.js */}
        {/* remove isDark to change to light color */}
        <Header navigation={navigation} />
        <Component {...pageProps} />
      </TP>
    </>
  );
};

// use {publicRuntimeConfig} because process.env is not going to be avilable on client side

const { publicRuntimeConfig } = getConfig();
MyApp.getInitialProps = async () => {
  const res = await fetch(`${publicRuntimeConfig.API_URL}/navigations`);
  const navigation = await res.json();

  return { navigation };
};
export default MyApp;
