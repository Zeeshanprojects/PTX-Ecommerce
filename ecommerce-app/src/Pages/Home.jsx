import React from "react";
import Image from "../Images/Image";
import "./Home.css";
export default function Home() {
  return (
    <>
      <div className="image-wrapper">
        <img
          src={Image.sliderimage2}
          alt="slider-image2"
          className="sliderimage"
        />
        <div className="imagetext">
          <h6>Summer Collection</h6>
          <h2>Fall - Summer Collections 2025</h2>
          <p>
            A specialist label creating luxury essentials Ethically crafted with
            an <br /> unwavering commitment to exceptional quality
          </p>
          <button type="button" className="btn btn-dark ">
            SHOP NOW
          </button>
        </div>
      </div>

      <br/>
      <h2 className="text-center">FEATURED PRODUCT</h2>
      <div className="container">
        <div className="row mt-5">
          <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
            <div className="box">
              <img
                src={Image.image1}
                className="card-img-top"
                alt="Tshirt1"
              />
              <div className="card-body">
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
            <div className="box">
              <img
                src={Image.image2}
                className="card-img-top"
                alt="Tshirt2"
              />
              <div className="card-body">
                
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
            <div className="box">
              <img
                src={Image.image3}
                className="card-img-top"
                alt="Tshirt3"
              />
              <div className="card-body">
                
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
            <div className="box">
              <img
                src={Image.image4}
                className="card-img-top"
                alt="Tshirt4"
              />
              <div className="card-body">
               
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
            <div className="box">
              <img
                src={Image.image5}
                className="card-img-top"
                alt="Tshirt1"
              />
              <div className="card-body">
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
            <div className="box">
              <img
                src={Image.image6}
                className="card-img-top"
                alt="Tshirt2"
              />
              <div className="card-body">
                
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
            <div className="box">
              <img
                src={Image.image7}
                className="card-img-top"
                alt="Tshirt3"
              />
              <div className="card-body">
                
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
            <div className="box">
              <img
                src={Image.image8}
                className="card-img-top"
                alt="Tshirt4"
              />
              <div className="card-body">
               
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Blog"></div>
<div className="newsletter"></div>

<br/>

   
    </>
  );
}
