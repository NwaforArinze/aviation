import { useEffect } from "react";
import aos from "aos";
import "aos/dist/aos.css";
import "aos/dist/aos.js";

const ServicesCom = (props) => {
  useEffect(() => {
    aos.init(
      {
        duration: 2000,
      },
      []
    );
  });

  return (
    <div className="container my-5">
      <h4 className="text-center my-4">{props.title}</h4>
      <div className="d-flex service-container">
        <div className="card mx-2" data-aos={props.left}>
          <img
            src={props.imageFour}
            className="card-img-top"
            alt="about aircraft"
            style={{ height: "30vh" }}
          />
          <div className="card-body">
            <h5 className="card-title">{props.topicOne}</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et porro
              ab cum placeat rem facilis eligendi, ratione accusamus quisquam
              commodi necessitatibus magni
            </p>
          </div>
        </div>
        <div className="card mx-2" data-aos={props.center}>
          <img
            src={props.imageThree}
            className="card-img-top"
            alt="about aircraft"
            style={{ height: "30vh" }}
          />
          <div className="card-body">
            <h5 className="card-title">{props.topicTwo}</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et porro
              ab cum placeat rem facilis eligendi, ratione accusamus quisquam
              commodi necessitatibus magni
            </p>
          </div>
        </div>
        <div className="card mx-2" data-aos={props.right}>
          <img
            src={props.imageOne}
            className="card-img-top"
            alt="about aircraft"
            style={{ height: "30vh" }}
          />
          <div className="card-body">
            <h5 className="card-title">{props.topicThree}</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. At,
              laboriosam atque assumenda fugiat pariatur laborum corporis
              adipisci ratione minima maiores totam porro?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCom;
