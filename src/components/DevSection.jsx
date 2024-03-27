import React from "react";
import dev from "../assets/dev.svg";

const DevSection = () => {
  return (
    <div className="dev-section-container">
      <h1 className="dev-section-title">
        Building Cross•Chain <span className="bg-sky-400 rounded-[5px] py-[4px] px-4">Together</span>
      </h1>
      <div className="dev-section-wrapper">
        <div className="dev-section-text">
          <h2>API SDK</h2>
          <p className="dev-section-description">
            Our goal is to provide a full ecosystem that makes it easy for
            developers create and deploy cross-chain applications.
          </p><br />
          <div className="btn-wrapper">
            <button className="primary px-4">
              <span>Learn More</span>
            </button><br />

            {/* <button className="bg-sky-400 px-4 mt-2">
              <span>Get In Touch</span>
            </button> */}
          </div>
        </div><br />
        <div className="dev-section-image">
          <img src={dev} alt="dev tools" />
        </div>
      </div>
    </div>
  );
};

export default DevSection;
