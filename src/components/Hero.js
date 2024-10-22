import React from "react";
import "../styles/Hero.css";
import hang from "../assets/spook/anihang.gif";
import FloatingItems from "./FloatingItems";

const Hero = () => {
  return (
    <section className="hero">
      <div className="box--gradient" />
      <div className="left edge panel">
        <div className="left-content">
          <h2>
            WEAR A COSTUME OR PERISH. DRINK MY SPOOKY HALLOWEEN BREW (MICHELOB
            ULTRA IN A KEG) OR BRING YOUR OWN BEER
          </h2>
        </div>
      </div>
      <div className="center panel">
        <div className="center-content">
          <img alt="me as a baby" src={hang} className="me" />
          <h1 lang="en">
            HELP! GHOSTS AND SKELETONS ARE INVADING MY HOUSE ON 10/26 AT 7P.M.!
          </h1>
        </div>
      </div>
      <div className="right edge panel">
        <div className="right-content">
          <h3>THERE WILL BE</h3>
          <FloatingItems />
        </div>
      </div>
    </section>
  );
};

export default Hero;
