import React, { useState, useRef } from "react";
import "../styles/Curtain.css";
import song from "../assets/newLevel.mp3";
import unopenedMail from "../assets/unopened mail.gif";
import mail from "../assets/mail.gif";

const Curtain = () => {
  const [mailOpened, setMailOpened] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isHiding, setIsHiding] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioElementRef = useRef(null);
  const audioContextRef = useRef(null);
  const sourceNodeRef = useRef(null);
  const resumeTimeRef = useRef(0);

  const handleClick = () => {
    setMailOpened(true);

    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
      sourceNodeRef.current = audioContextRef.current.createMediaElementSource(audioElementRef.current);
      const gainNode = audioContextRef.current.createGain();
      sourceNodeRef.current.connect(gainNode);
      gainNode.connect(audioContextRef.current.destination);
    }

    if (!isPlaying) {
      resumeTimeRef.current = audioElementRef.current.currentTime;
      audioElementRef.current.play();
    }
    setTimeout(() => {
      if (!isHiding) {
        setIsPlaying(true);
        audioElementRef.current.currentTime = 0;
        setIsHiding(true);
        setTimeout(() => {
          setIsHidden(true);
        }, 2000);
      }
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
      <audio ref={audioElementRef} src={song} autoPlay={isPlaying} muted={!isPlaying}/>
    </div>
  );
};

export default Curtain;
