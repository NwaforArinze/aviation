import React from "react";
import imageTwo from "../images/imageTwo.jpg";
import "../css/aboutComp.css";
import aos from "aos";
import "aos/dist/aos.css";
import "aos/dist/aos.js";

const AboutCom = () => {
  return (
    <div className="about-overall">
      <h2 className="text-center pb-5 pt-5">About Us</h2>
      <div className="about-container d-flex w-75 mx-auto pb-5">
        <div className="m-2" data-aos="zoom-in">
          <img src={imageTwo} alt="aircraft" />
        </div>
        <div className="about-text-container m-2">
          <h2>What We Are About</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa odio
            cupiditate porro perferendis eius eveniet quisquam magni ducimus
            repellat laboriosam labore odit maxime numquam accusantium minima,
            tenetur ex ipsam voluptas. Vitae architecto expedita qui iure
            corporis ducimus praesentium iusto consequatur amet?
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa odio
            cupiditate porro perferendis eius eveniet quisquam magni ducimus
            repellat tenetur ex ipsam voluptas. Vitae iure corporis ducimus
            praesentium iusto consequatur amet?
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa odio
            cupiditate porro perferendis eius eveniet quisquam magni ducimus
            repellat laboriosam labore odit maxime numquam accusantium minima,
            tenetur ex ipsam voluptas. Vitae architecto expedita corporis
            ducimus praesentium iusto consequatur amet?
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutCom;
