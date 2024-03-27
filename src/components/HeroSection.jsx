import React from "react";
import search from "../assets/icons/search.svg";

import { FaTelegram, FaDiscord, FaYoutube, FaTwitter } from 'react-icons/fa';

import hero from "../assets/hero.svg";

const HeroSection = () => {
  return (
    <div className="hero-section-container md:pt-[50px] pt-[40px] px-[2vw]">
      <div className="hero-info-wrapper">
        <div className="hero-info-text md:w-[650px] w-[100%]">
          <h1 className="pb-[20px] md:text-[65px] text-[34px] font-extrabold">
            The <span className="highlighted">Decentralized</span> Cross-Chain
            Exchange
          </h1>
          <p className="hero-info-description md:text-[30px] text-[16px] font-bold">
            Seamlessly navigate the world of Decentralized finance with confidence and ease. 
            Join ZenSwap on the journey to redefine finance.
          </p><br />

          <div className="search-container">
            <div className="search-input-wrapper">
              <img className="search" src={search} alt="search" />
              <input
                className="search-input"
                placeholder="Search 5000+ tokens across 9 Chains..."
              ></input>
            </div>
            <button className="search-btn primary">
              <span className="start-swapping">Start Swapping</span>
            </button>
          </div>
          
          <div className="social-links-container">
            <div className="social-links flex gap-4 mt-[50px] pb-[20px]">
              <a href="/">
                <FaTelegram className="text-[22px]"/>
              </a>
              <a href="/">
                <FaTwitter className="text-[22px]"/>
              </a>
              <a href="/">
                <FaYoutube className="text-[22px]"/>
              </a>
              <a href="/">
                <FaDiscord className="text-[22px]"/>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-image-container">
        <img className="hero-img md:h-[530px] h-[400px]" src={hero} alt="blockchain" />
      </div>
    </div>
  );
};

export default HeroSection;
