import React from "react";

const ContactCom = () => {
  return (
    <div className="contact-overall-container m-4">
      <h2 className="text-center p-5 mb-2">Contact Us</h2>
      <div className="d-flex contact-container">
        <div className="white justify-content-center text-center align-item-center">
          <h1 className="white-head">We're here</h1>
          <p>Our door is always open to book a flight with us</p>
        </div>
        <div className="bg-info coloured justify-content-center text-center align-items-center text-white p-5  mb-5">
          <h1 className="mt-3 coloured-head">Lets Talk</h1>
          <p>Share your excitement with us</p>
          <a
            href="mailto:info@qatarairline.com"
            className="text-decoration-none text-white link"
          >
            info@qatarairline.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactCom;
