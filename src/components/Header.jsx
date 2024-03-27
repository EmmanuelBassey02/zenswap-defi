import React, { useState } from "react";
// import {  MenuIcon } from "../assets/icons/menu.svg";
import { FaBars } from 'react-icons/fa';

const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () =>
    setIsExpanded((prevIsExpanded) => !prevIsExpanded);

  return (
    <>
      <div className="header-container border-b-[1px] border-sky-400 mb-8">
        <div className="logo">ZENSWAP</div>
        <div className="menu">
          <div className="menu-links">
            <a href="/">App</a>
            <a href="/">Products</a>
            <a href="/">Build</a>
            <a href="/">Careers</a>
            <a href="/">About</a>
          </div>
        </div>
        <div className="wallet-btn">
          <button className="primary px-[7px]">Enter App</button>
        </div>
        <button className="hamburger" onClick={toggleExpanded}>
          {/* <MenuIcon /> */}
          <FaBars />
        </button>
      </div>
      {isExpanded && (
        <div className="menu-overlay">
          <div className="menu-links">
            <a href="/">App</a>
            <a href="/">Products</a>
            <a href="/">Build</a>
            <a href="/">Careers</a>
            <a href="/">About</a>
            <a href="/">Enter App</a>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
