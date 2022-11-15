import React, { useState, useEffect } from "react";
import '../styles/globals.scss'
import Navbar from "../components/Navbar";
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
        <Navbar theme={theme} toggleTheme={themeToggler}/>
        <Component {...pageProps} />
    </>
    )
}

export default MyApp
