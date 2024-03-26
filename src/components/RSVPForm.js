import React from "react";
import "../styles/RSVPForm.css";
import btn from "../assets/rsvpBtn.gif";

const RSVPForm = () => {
  return (
    <div className="rsvp-wrapper">
      <section className="rsvp-container">
        <form>
          {/* would be cool to autofill this from a name in the url */}
          <input placeholder="Your name" />
          <button className="rsvp-btn">
            <img src={btn} />
          </button>
        </form>
        <div className="rsvp-list-container"></div>
      </section>
    </div>
  );
};

export default RSVPForm;
