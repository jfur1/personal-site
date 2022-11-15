import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "./Logo";
import NavItem from "./NavItem";

const Navbar = ({ theme,  toggleTheme }) => {
  const MENU_LIST = [
    { text: "Home", href: "/" },
    { text: "About", href: "/about" },
    { text: "Contact", href: "/contact" },
  ];
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  console.log('navActive:', navActive)
  console.log('activeIdx:', activeIdx)

  return (
    <header>
      <nav className={`nav`}>
        <Link href={"/"}>
            <h1 className="logo">{`< John Furlong />`}</h1>
        </Link>

        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          <button 
            className={`mode-switch` + (theme === 'dark' ? ' active' : '')} 
            title="Switch Theme" 
            onClick={toggleTheme}>
            <svg className="moon" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="24" height="24" viewBox="0 0 24 24">
              <defs></defs>
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
            </svg>
          </button>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;