import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

import Slider from "react-slick";
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";


function Silder () {


  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div>
      <div>
        <Slider {...settings} className="ms-5">
          <div className="">
            <img
              src={img1}
              alt="img1 Loading"
              className="img-fluid"
              style={{ width: "95%", margin: "5px" }}
            />
          </div>
          <div>
            <img
              src={img2}
              alt="img1 Loading"
              style={{ width: "95%", margin: "5px" }}
            />
          </div>
          <div>
            <img
              src={img3}
              alt="img1 Loading"
              style={{ width: "95%", margin: "5px" }}
            />
          </div>
          <div>
            <img
              src={img1}
              alt="img1 Loading"
              style={{ width: "95%", margin: "5px" }}
            />
          </div>
          <div>
            <img
              src={img2}
              alt="img1 Loading"
              style={{ width: "95%", margin: "5px" }}
            />
          </div>
          <div>
            <img
              src={img3}
              alt="img1 Loading"
              style={{ width: "95%", margin: "5px" }}
            />
          </div>
        </Slider>
      </div>
    </div>
  );
}
export default Silder;