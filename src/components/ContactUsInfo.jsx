import React from "react";

function ContactUsInfo({ icon, label, primaryText, secondaryText }) {
  return (
    <div className="contact-us-info">
      <p className="contact-icon">{icon}</p>
      <h1 className="contact-label">{label}</h1>
      <p className="contact-text">{primaryText}</p>
      <p className="contact-text">{secondaryText}</p>
    </div>
  );
}

export default ContactUsInfo;
