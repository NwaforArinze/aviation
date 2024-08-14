import React from "react";
import Carousel from "../components/Carousel";
import ServicesCom from "../components/ServicesCom";
import imageFour from "../images/imageFour.jpg";
import imageThree from "../images/imageThree.jpg";
import imageOne from "../images/imageOne.jpg";
import imageTwo from "../images/imageTwo.jpg";
import imageFive from "../images/imageFive.jpg";
import AboutCom from "../components/AboutCom";
import ContactCom from "../components/ContactCom";

const Home = () => {
  return (
    <div>
      <Carousel />
      <ServicesCom
        title="Our Services"
        imageFour={imageFour}
        imageThree={imageThree}
        imageOne={imageOne}
        topicOne="Ticketing"
        topicTwo="Tour Guide"
        topicThree="Hotel Reservation"
        left="fade-down-right"
        center="fade-down"
        right="fade-down-left"
      />
      <ServicesCom
        imageFour={imageTwo}
        imageThree={imageFive}
        imageOne={imageFour}
        topicOne="Comfort"
        topicTwo="Luggage Handling"
        topicThree="Round Trip"
        left="fade-up-right"
        center="fade-up"
        right="fade-up-left"
      />
      <AboutCom />
      <ContactCom />
    </div>
  );
};

export default Home;
