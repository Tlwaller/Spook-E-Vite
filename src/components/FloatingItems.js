import React from "react";
import "../styles/FloatingItems.css";
import beer from "../assets/beer.gif";
import pizza from "../assets/pizza.gif";
import controller from "../assets/controller.gif";
import pingpong from "../assets/ping-pong.gif";
import cat from "../assets/cat.gif";

export default function FloatingItems() {
  return (
    <ul class="flex-box">
      <li className="item1">
        <img alt="beer gif" src={beer} width="100px" />
        BEER
      </li>
      <li className="item2">
        <img alt="pizza gif" src={pizza} width="100px" />
        PIZZA
      </li>
      <li className="item3">
        <img alt="controller gif" src={controller} width="100px" />
        SOUL CALIBUR
        <br /> TOURNAMENT
      </li>
      <li className="item4">
        <img alt="cat gif" src={cat} width="80px" />
        ROWDY
      </li>
      <li className="item5">
        <img alt="ping-pong gif" src={pingpong} width="80px" />
        PING PONG
      </li>
    </ul>
  );
}
