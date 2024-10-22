import React, { useState, useRef, useEffect } from "react";
import "../styles/Curtain.css";
import song1 from "../assets/spooky.mp3";
import song2 from "../assets/scary.mp3";
import unopenedMail from "../assets/unopened mail.gif";
import mail from "../assets/mail.webp";
import gost from "../assets/spook/ghost-spooky.gif"; // Replace with your image path

const Curtain = () => {
  const [song, setSong] = useState(song1);
  const [mailOpened, setMailOpened] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isHiding, setIsHiding] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const audioElementRef = useRef(null);
  const audioContextRef = useRef(null);
  const sourceNodeRef = useRef(null);
  const resumeTimeRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!isHidden) {
        window.scrollTo(0, 0);
      }
    };

    const disableScroll = () => {
      if (!isHidden) {
        document.body.style.overflow = "hidden";
        document.documentElement.style.overflow = "hidden";
        window.addEventListener("scroll", handleScroll);
      } else {
        document.body.style.overflow = "";
        document.documentElement.style.overflow = "";
        window.removeEventListener("scroll", handleScroll);
      }
    };

    disableScroll();

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHidden]);

  const handleClick = () => {
    setMailOpened(true);
    setIsPlaying(true);
    audioElementRef.current.currentTime = 48;

    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext ||
        window.webkitAudioContext)();
      sourceNodeRef.current = audioContextRef.current.createMediaElementSource(
        audioElementRef.current
      );
      const gainNode = audioContextRef.current.createGain();
      sourceNodeRef.current.connect(gainNode);
      gainNode.connect(audioContextRef.current.destination);
    }

    if (!isPlaying) {
      resumeTimeRef.current = audioElementRef.current.currentTime;
      audioElementRef.current.play();
    }

    // Show the image
    setShowImage(true);

    // Set a timeout to hide the image after it finishes growing
    setTimeout(() => {
      setShowImage(false);
      if (!isHiding) {
        setIsHiding(true);
        setTimeout(() => {
          setIsHidden(true);
        }, 2000); // Wait for 2 seconds before hiding the curtain
      }
    }, 9000); // Image will disappear after 7 seconds of growth and 2 seconds of fade out
  };

  const playNextSong = () => {
    song === song1 ? setSong(song2) : setSong(song1);
  };

  return (
    <div
      className={`curtain ${isHiding && "hiding"}`}
      onClick={handleClick}
      style={{ display: isHidden ? "none" : "flex" }}
    >
      <div className="mail-contain" style={{ display: isHiding ? "none" : "" }}>
        <span>U HAVE MAIL.</span>
        <img
          src={mailOpened ? mail : unopenedMail}
          alt="mail"
          className="mail"
        />
        <span>TAP TO OPEN</span>
      </div>

      {/* Growing Image */}
      {showImage && (
        <div className="growing-image">
          <img src={gost} alt="Growing" />
        </div>
      )}

      <audio
        ref={audioElementRef}
        src={song}
        autoPlay={isPlaying}
        muted={!isPlaying}
        onEnded={playNextSong}
      />
    </div>
  );
};

export default Curtain;
