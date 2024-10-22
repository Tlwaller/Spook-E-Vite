import React from "react";
import "../styles/FloatingItems.css";
import beer from "../assets/beer.gif";
import pizza from "../assets/pizza.gif";
import controller from "../assets/controller.gif";
import pingpong from "../assets/ping-pong.gif";
import cat from "../assets/cat.gif";

export default function FloatingItems() {
  return (
    <ul className="flex-box">
      <li className="floating-item item1">
        <img alt="beer gif" src={beer} width="100px" />A KEG OF BEER
      </li>
      <li className="floating-item item2">
        <img alt="pizza gif" src={pizza} width="100px" />
        SPOOKY SNACKS
      </li>
      <li className="floating-item item3">
        <img alt="controller gif" src={controller} width="100px" />
        VIDEO GAME
        <br /> TOURNAMENT
      </li>
      <li className="floating-item item4">
        <img alt="cat gif" src={cat} width="80px" />
        ROWDY
      </li>
      <li className="floating-item item5">
        <img alt="ping-pong gif" src={pingpong} width="80px" />
        PING/BEER PONG
      </li>
    </ul>
  );
}
