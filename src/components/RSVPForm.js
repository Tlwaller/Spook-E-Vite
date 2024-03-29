import React, { useEffect, useState } from "react";
import "../styles/RSVPForm.css";
import btn from "../assets/rsvpBtn.gif";
import axios from "axios";

const RSVPForm = () => {
  const [guests, setGuests] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080").then((res) => {
      setGuests(res.data);
    });
  }, []);

  console.log(guests);
  return (
    <div className="rsvp-wrapper">
      <section className="rsvp-container">
        <form>
          {/* would be cool to autofill this from a name in the url */}
          <div className="input-group">
            <input placeholder="Your name" />
            <input placeholder="Your message" />
          </div>
          <button className="rsvp-btn">
            <img
              alt="rsvp button"
              src={btn}
              style={{ width: "100%", height: "100%" }}
            />
          </button>
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
