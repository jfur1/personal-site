import React, { useState, useEffect } from "react";
import '../styles/globals.scss'
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
