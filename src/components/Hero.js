import React from "react";
import "../styles/Hero.css";
import me from "../assets/lil-me.png";
import beer from "../assets/beer.gif";
import pizza from "../assets/pizza.gif";
import controller from "../assets/controller.gif";
import pingpong from "../assets/ping-pong.gif";
import cat from "../assets/cat.gif";

const Hero = () => {
  return (
    <section>
      <div className="box--gradient" />
      <div className="left edge panel">
        <h2 className="rotate-cw">I AM QUICKLY APPROACHING THE</h2>
        <h2 className="rotate-ccw">MIDDLE OF MY LIFE 4/27</h2>
      </div>
      <div className="center panel">
        <div className="container">
          <img alt="me as a baby" src={me} className="me" />
          <h1>TREY IS TURNING 25</h1>
        </div>
      </div>
      <div className="right edge panel">
        <h2>THERE WILL BE</h2>
        BEER
        <img alt="beer gif" src={beer} width={"100px"} />
        PIZZA
        <img alt="pizza gif" src={pizza} width={"100px"} />
        SOUL CALIBUR TOUNAMENT
        <img alt="controller gif" src={controller} width={"100px"} />
        ROWDY
        <img alt="cat gif" src={cat} width={"80px"} />
        PING PONG
        <img alt="ping-pong gif" src={pingpong} width={"80px"} />
      </div>
    </section>
  );
};

export default Hero;
