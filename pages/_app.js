import React, { useState } from "react";
import { GlobalStyle } from "../styles/globalStyles";
import { darkTheme, lightTheme, truTheme } from "../styles/themes";
import { ThemeProvider } from "styled-components";
import Layout from "../components/Layout/Layout.js";
import "../styles/styles.css";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("dark");
  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Layout setTheme={setTheme} currentTheme={theme}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
