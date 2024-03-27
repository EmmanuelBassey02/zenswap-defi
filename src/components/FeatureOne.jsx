import React from "react";
import TokenCard from "./TokenCard";

const FeatureOne = () => {
  const tokens = ["0x", "gosh-realm"];
  return (
    <div className="feature-container">
      <div className="swap-token-container">
        <div className="tokens-container">
          {tokens.map((token, index) => {
            return <TokenCard id={token} />;
          })}
        </div>
        <div className="btn-container">
          <button className="primary px-[10px] py-[4px]">swap</button>
        </div>
      </div>
      <div className="feature-description">
        <div className="feature-description-title">
          <h1>
            <span className="highlighted px-[10px] md:text-[25px] font-bold">Swap</span> Any Token, Any Chain
          </h1>
        </div>
        <p className="feature-description-paragraph mb-[20px]">
          We&#39;ve created ZenSwap to help you make cross-chain swaps in just
          few clicks. You'll be able to easily convert your coins from one
          blockchain to another, or trade them for other cryptocurrencies and
          token.
        </p>
        <div className="btn-container">
          <button className="secondary text-[16px] px-[7px] font-bold">
            <span>Start swapping</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeatureOne;
