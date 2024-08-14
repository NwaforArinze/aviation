import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className=" p-5 bg-black text-light">
      <div className="d-flex justify-content-around footer-container">
        <div>
          <p>
            Appland is completely creative, lightweight, clean app landing page.
          </p>
          <p>Made with by AZ Designing</p>
          <div className="d-flex" data-aos="flip-up">
            <div className="me-5">
              <FaFacebookF />
            </div>
            <div className="me-5">
              <FaPinterestP />
            </div>
            <div className="me-5">
              <i class="bi bi-skype"></i>
            </div>
            <div className="me-5">
              <i class="bi bi-twitter-x"></i>
            </div>
          </div>
        </div>
        <div>
          <ul>
            <li>
              <h4 href="#">About</h4>
            </li>
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">coporate Sales</a>
            </li>
            <li>
              <a href="">Terms &amp; Policy</a>
            </li>
            <li>
              <a href="">Community</a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <h4 href="#">Support</h4>
            </li>
            <li>
              <a href="">Help</a>
            </li>
            <li>
              <a href="">Support</a>
            </li>
            <li>
              <a href="">Privacy Policy</a>
            </li>
            <li>
              <a href="">Terms &amp; Condition</a>
            </li>
            <li>
              <a href="">Help &amp; Support</a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <h4 href="#">Call Centre</h4>
            </li>
            <li>
              <a href="">Email Us</a>
            </li>
            <li>
              <a href="">Terms &amp; Condition</a>
            </li>
            <li>
              <a href="">Help Center</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
