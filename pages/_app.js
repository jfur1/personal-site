import React, { useState, useEffect } from "react";
import '../styles/globals.scss'
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
import  { useDarkMode } from "../components/DarkModeCustomHook"

function MyApp({ Component, pageProps }) {
  const [theme, themeToggler] = useDarkMode();

  useEffect(() => {
    if (theme === 'dark')
      document.documentElement.classList.add('dark');
    else 
      document.documentElement.classList.remove('dark');
  }, [theme]);

  return (
    <>
        <Component {...pageProps} theme={theme} toggleTheme={themeToggler} />
    </>
    )
}

export default MyApp
