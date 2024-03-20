import React, { useState, useRef } from "react";
import "../styles/Curtain.css";
import ReactAudioPlayer from "react-audio-player";
import song from "../assets/newLevel.mp3";
import unopenedMail from "../assets/unopened mail.gif";
import mail from "../assets/mail.gif";

const Curtain = () => {
  const [mailOpened, setMailOpened] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isHiding, setIsHiding] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioPlayer = useRef(null);

  const handleClick = () => {
    setMailOpened(true);
    setTimeout(() => {
      setIsPlaying(true);
      audioPlayer.current.audioEl.current.currentTime = 0;
      setIsHiding(true);
      setTimeout(() => {
        setIsHidden(true);
      }, 2000);
    }, 7290);
  };
  return (
    <div
      className={`curtain ${isHiding && "hiding"}`}
      onClick={handleClick}
      style={{ display: isHidden ? "none" : "flex" }}
    >
      <div className="mail-contain">
        <span>U HAVE MAIL.</span>
        <img
          src={mailOpened ? mail : unopenedMail}
          alt="mail"
          className="mail"
        />
        <span>TAP TO OPEN</span>
      </div>
      <ReactAudioPlayer ref={audioPlayer} src={song} autoPlay={isPlaying} />
    </div>
  );
};

export default Curtain;
