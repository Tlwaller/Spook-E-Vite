import React from "react";
import "../styles/Hero.css";
import me from "../assets/lil-me.png";
import FloatingItems from "./FloatingItems";

const Hero = () => {
  return (
    <section className="hero">
      <div className="box--gradient" />
      <div className="left edge panel">
        <div className="left-content">
          <h2>
            I AM QUICKLY APPROACHING THE MIDDLE OF MY LIFE. COME TO MY HOUSE TO
            CELEBRATE.
          </h2>
        </div>
      </div>
      <div className="center panel">
        <div className="center-content">
          <img alt="me as a baby" src={me} className="me" />
          <h1 lang="en">TREY IS TURNING 25. BE THERE. 4/27 7P.M.</h1>
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
