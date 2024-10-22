import React, { useEffect, useState } from "react";
import "../styles/RSVPForm.css";
import btn from "../assets/rsvpBtn.gif";
import image1 from "../assets/spook/ghost-spooky.gif";
import image2 from "../assets/spook/skull.gif";
import axios from "axios";

const RSVPForm = () => {
  const [guests, setGuests] = useState([]);
  const [nameInput, setNameInput] = useState("");
  const [messageInput, setMessageInput] = useState("");
  const [voteInput, setVoteInput] = useState("");
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const BIN_ID = "6717dde5ad19ca34f8bcd122";
  const API_KEY =
    "$2a$10$xE3nGmuECpmfO9O8b.GVcuT0dyPWzBO3sCK8QAsMD2ltG/5tZuvvy";

  const getGuests = async () => {
    try {
      const response = await axios.get(
        `https://api.jsonbin.io/v3/b/${BIN_ID}`,
        {
          headers: { "X-Master-Key": API_KEY },
        }
      );
      setGuests(response.data.record.guests || []);
    } catch (err) {
      setError("Failed to fetch guests.");
      console.error(err);
    }
  };

  useEffect(() => {
    getGuests();
  }, []);

  const calculateVoteCounts = () => {
    const voteCounts = {};

    guests.forEach((guest) => {
      if (guest.vote) {
        voteCounts[guest.vote] = (voteCounts[guest.vote] || 0) + 1;
      }
    });

    return voteCounts;
  };

  const handleInput = (event) => {
    setError("");
    const { name, value } = event.target;
    if (name === "name") {
      setNameInput(value);
    } else {
      setMessageInput(value);
    }
  };

  const postGuest = async (event) => {
    event.preventDefault();

    if (!nameInput || !messageInput) {
      setError("Please fill all fields.");
      return;
    }

    const newGuest = {
      name: nameInput,
      message: messageInput,
      vote: voteInput,
    };

    try {
      await axios.put(
        `https://api.jsonbin.io/v3/b/${BIN_ID}`,
        { guests: [...guests, newGuest] },
        {
          headers: { "X-Master-Key": API_KEY },
        }
      );
      setGuests((prevGuests) => [...prevGuests, newGuest]);
      setNameInput("");
      setMessageInput("");
      setVoteInput("");
      setIsSubmitted(true);
    } catch (err) {
      setError("Way to go. You broke it.");
      console.error(err);
    }
  };

  const voteCounts = calculateVoteCounts();

  return (
    <div className="rsvp-wrapper">
      <section className="rsvp-container">
        <form onSubmit={postGuest}>
          <div className="input-group">
            <input
              placeholder="Your name"
              value={nameInput}
              name="name"
              onChange={handleInput}
            />
            <input
              placeholder="Your message"
              value={messageInput}
              name="message"
              onChange={handleInput}
            />
            <select
              placeholder={voteInput}
              onChange={(e) => setVoteInput(e.target.value)}
              defaultValue=""
            >
              <option value="" disabled>
                Game for tournament
              </option>
              <option value="None">
                <span>None</span>
                <span>({voteCounts[""] || 0} votes)</span>
              </option>
              <option value="Soul Calibur II">
                <span>Soul Calibur II</span>
                <span>({voteCounts["Soul Calibur II"] || 0} votes)</span>
              </option>
              <option value="Super Smash Bros 64">
                <span>Super Smash Bros 64</span>
                <span>({voteCounts["Super Smash Bros 64"] || 0} votes)</span>
              </option>
              <option value="Bloody Roar 2">
                <span>Bloody Roar 2</span>
                <span>({voteCounts["Bloody Roar 2"] || 0} votes)</span>
              </option>
              <option value="Killer Instinct">
                <span>Killer Instinct</span>
                <span>({voteCounts["Killer Instinct"] || 0} votes)</span>
              </option>
              <option value="King of Fighters">
                <span>King of Fighters</span>
                <span>({voteCounts["King of Fighters"] || 0} votes)</span>
              </option>
              <option value="Micro Machines">
                <span>Micro Machines</span>
                <span>({voteCounts["Micro Machines"] || 0} votes)</span>
              </option>
              <option value="Mario Kart 64">
                <span>Mario Kart 64</span>
                <span>({voteCounts["Mario Kart 64"] || 0} votes)</span>
              </option>
            </select>
          </div>
          {!error ? (
            !isSubmitted ? (
              <button className="rsvp-btn" disabled={isSubmitted}>
                <img
                  alt="rsvp button"
                  src={btn}
                  style={{ width: "100%", height: "100%" }}
                />
              </button>
            ) : (
              <div style={{ display: "flex", color: "red" }}>
                <img alt="image1" src={image1} />
                <h4>BOO</h4>
                <img alt="image2" src={image2} />
              </div>
            )
          ) : (
            <span className="error-txt">{error}</span>
          )}
        </form>
        <div className="bloodbar">
          <div className="guest-list-container">
            <ul className="guest-list">
              {guests.map((guest, index) => (
                <li className="guest-item" key={index}>
                  <span className="guest-name">{guest.name}</span>
                  <span className="guest-message">"{guest.message}"</span>
                  <span className="guest-vote">{guest.vote}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RSVPForm;
