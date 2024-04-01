import React, { useEffect, useState } from "react";
import "../styles/RSVPForm.css";
import btn from "../assets/rsvpBtn.gif";
import axios from "axios";

const RSVPForm = () => {
  const [guests, setGuests] = useState([]);
  const [nameInput, setNameInput] = useState("");
  const [messageInput, setMessageInput] = useState("");
  const [error, setError] = useState("");

  const getGuests = () => {
    axios
      .get("https://tw-25-evite-6176064e0b7f.herokuapp.com/")
      .then((res) => {
        setGuests(res.data);
      })
      .catch((error) => console.error(error));
  };
  useEffect(() => getGuests(), []);

  const handleInput = (event) => {
    setError("");
    event.target.name === "name"
      ? setNameInput(event.target.value)
      : setMessageInput(event.target.value);
  };

  const postGuest = (event) => {
    event.preventDefault();
    const regex = /^(?=.*[a-zA-Z]).+$/;
    if (!regex.test(nameInput)) {
      setError("Look at this mf trying to RSVP without a name lmao");
    } else {
      const data = {
        name: nameInput,
        message: messageInput,
      };
      axios
        .post("https://tw-25-evite-6176064e0b7f.herokuapp.com/", data)
        .then((res) => {
          setGuests([...guests, res.data]);
          setNameInput("");
          setMessageInput("");
        })
        .catch((error) => {
          console.error("Error posting guest:", error);
          setError("An error occurred while posting the guest");
        });
    }
  };

  return (
    <div className="rsvp-wrapper">
      <section className="rsvp-container">
        <form onSubmit={(event) => postGuest(event)}>
          {/* would be cool to autofill this from a name in the url */}
          <div className="input-group">
            <input
              placeholder="Your name"
              value={nameInput}
              name="name"
              onChange={(event) => handleInput(event)}
            />
            <input
              placeholder="Your message"
              value={messageInput}
              name="message"
              onChange={(event) => handleInput(event)}
            />
          </div>
          {!error ? (
            <button className="rsvp-btn">
              <img
                alt="rsvp button"
                src={btn}
                style={{ width: "100%", height: "100%" }}
              />
            </button>
          ) : (
            <span className="error-txt">{error}</span>
          )}
        </form>
        <div className="guest-list-container">
          <ul className="guest-list">
            {guests.map((guest) => {
              return (
                <li className="guest-item" key={guest.id}>
                  <span className="guest-name">{guest.name}</span>
                  <span className="guest-message">"{guest.message}"</span>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default RSVPForm;
