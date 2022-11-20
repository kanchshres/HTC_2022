import React, { useState } from "react";
import "./Report.css"


const FORM_ENDPOINT = "https://public.herotofu.com/v1/5ff677c0-686f-11ed-bd0a-c1ef0a3c8340"; // TODO - fill on the later step

const Report = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
    >
      <div className="Header_Class">
      <h2>Report an Item</h2>
      </div>
      <div className="header_info">
     <h3>Having trouble with something? Dirty Clothing? Inappropriate Listings? </h3>
      </div>
      <div className="Name_Class">
        <div className="Full_name">
        </div>
        <input
          type="text"
          placeholder="Your Name"
          name="name"
          className="Name_Class"
          required
        />
      </div>
      <div className="Email_Class">
      <div className="email_written">
        </div>
        <input
          type="email"
          placeholder="Your Email Address"
          name="email"
          className="Email_Class"
          required
        />
      </div>
      <div className="message">
        <textarea
          placeholder="Your message"
          name="message"
          className="message"
          required
        />
      </div>
      <div className="Submit Button">
        <button
          className="Submit Button"
          type="submit"
        >
          Send a message
        </button>
      </div>
    </form>
  );
};

export default Report;