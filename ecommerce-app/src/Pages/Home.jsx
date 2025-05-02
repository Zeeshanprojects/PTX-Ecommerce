import React, { useState } from "react";
import Image from "../Images/Image";
import "./Home.css";
import { motion } from "framer-motion";

// Animation variant for scroll-based fade-in
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Home() {
  const products = {
    Mens: [
      { id: 1, name: "Yellow", price: "PKR 1,999", image: Image.image1 },
      { id: 2, name: "Red", price: "PKR 2,299", image: Image.image2 },
      { id: 3, name: "Urban Black Shirt", price: "PKR 2,799", image: Image.image3 },
      { id: 4, name: "Ocean Blue Tee", price: "PKR 2,499", image: Image.image4 },
      { id: 5, name: "Ocean Blue Tee", price: "PKR 2,499", image: Image.image5 },
      { id: 6, name: "Urban Pink Tee", price: "PKR 2,799", image: Image.image6 },
      { id: 7, name: "Mint Green Tee", price: "PKR 2,299", image: Image.image7 },
      { id: 8, name: "Sunset Orange", price: "PKR 1,999", image: Image.image8 },
    ],
    Womens: [
      { id: 5, name: "Ocean Blue Tee", price: "PKR 2,499", image: Image.image5 },
      { id: 6, name: "Urban Pink Tee", price: "PKR 2,799", image: Image.image6 },
      { id: 7, name: "Mint Green Tee", price: "PKR 2,299", image: Image.image7 },
      { id: 8, name: "Sunset Orange", price: "PKR 1,999", image: Image.image8 },
    ],
    Juniors: [
      { id: 10, name: "Red Kid Tee", price: "PKR 1,499", image: Image.image10 },
      { id: 11, name: "Cartoon Tee", price: "PKR 1,199", image: Image.image11 },
      { id: 12, name: "Tiny Green Tee", price: "PKR 1,299", image: Image.image12 },
      { id: 13, name: "Red Kid Tee", price: "PKR 1,499", image: Image.image13 },
      { id: 14, name: "Cartoon Tee", price: "PKR 1,199", image: Image.image14 },
      { id: 15, name: "Tiny Green Tee", price: "PKR 1,299", image: Image.image15 },
      { id: 16, name: "Red Kid Tee", price: "PKR 1,499", image: Image.image16 },
      { id: 17, name: "Cartoon Tee", price: "PKR 1,199", image: Image.image17 },
      { id: 18, name: "Tiny Green Tee", price: "PKR 1,299", image: Image.image18 },
    ],
  };

  const [activeTab, setActiveTab] = useState("Mens");

  return (
    <>
      <div className="image-wrapper">
        <img src={Image.banner} alt="slider-image1" className="sliderimage" />
        <div className="imagetext">
          <button type="button" className="btn btn-outline-light mt-4">
            SHOP NOW
          </button>
        </div>
      </div>

      <div className="space"></div>

      <motion.h2
        className="text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        FEATURED PRODUCT
      </motion.h2>

      <div className="space"></div>

      <motion.div
  className="container latest-products-section"
  initial="hidden"
  whileInView="visible"
  viewport={{ amount: 0.5, once: true }} // 👈 Triggers when 50% visible
  variants={fadeInUp}
>
  <div className="row">
    {[Image.product1, Image.product2, Image.product3].map((img, i) => (
      <motion.div
        key={i}
        className="col-sm-12 col-md-12 col-lg-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5, once: true }} // 👈 Animate each product when 50% visible
        variants={fadeInUp}
      >
        <div className="product-box">
          <img src={img} className="product-image" alt={`product${i + 1}`} />
          <div className="product-info">
            <h3 className="product-title">
              {["PTX Essential", "PTX Juniors", "PTX Denim"][i]}
            </h3>
            <p className="product-description">
              {[
                "Our wide range of quality premium essentials",
                "Our new range of essentials for kids",
                "Our collection of classic denim",
              ][i]}
            </p>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
</motion.div>

      <div className="space"></div>

      <motion.div
        className="text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="uppercase">
          CURATED ESSENTIALS FOR A TIMELESS WARDROBE
        </h2>
        <p>Complement your everyday style with timeless essential items</p>
      </motion.div>

      <div className="space"></div>

      <motion.ul
        className="nav nav-tabs justify-content-center mt-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        {Object.keys(products).map((category) => (
          <li className="nav-item" key={category}>
            <button
              className={`nav-link ${activeTab === category ? "active" : ""}`}
              onClick={() => setActiveTab(category)}
            >
              {category}
            </button>
          </li>
        ))}
      </motion.ul>

      <motion.div
        className="container my-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="row g-4">
          {products[activeTab].map((product) => (
            <div
              className="col-sm-12 col-md-6 col-lg-4 col-xl-3"
              key={product.id}
            >
              <div className="product-card position-relative overflow-hidden rounded shadow-sm">
                <span className="new-badge position-absolute top-0 start-0 m-2">
                  NEW
                </span>
                <div className="product-img-container position-relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="img-fluid product-img"
                  />
                  <div className="product-overlay d-flex justify-content-center align-items-center">
                    <button className="btn btn-dark btn-sm">View Details</button>
                  </div>
                </div>
                <div className="p-3">
                  <h6 className="mb-1">{product.name}</h6>
                  <p className="text-muted mb-1">{product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="container-fluid p-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <img src={Image.Fashion_Banner} alt="banner" className="banner" />
      </motion.div>

      <div className="space"></div>

      <motion.div
        className="container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="row text-center">
          {[Image.icon1, Image.icon2, Image.icon3].map((icon, i) => (
            <div key={i} className="col-sm-4 col-lg-4 col-xl-4">
              <div className="info-box">
                <img src={icon} alt="icons" className="info-icon" />
                <h5>
                  {["SUPPORT 24/7", "TRACK YOUR ORDER", "RETURN & EXCHANGES"][i]}
                </h5>
                <p>
                  {[
                    "Contact us 24 hours a day, 7 days a week",
                    "Click for the quick update on your order",
                    "Please view the return and exchange policy",
                  ][i]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="space"></div>
      <h2 className="text-center">
        BEST SELLINGS
        </h2>

        <div className="container-fluid p-0">
          <div className="row gx-1 gy-4">
            <div className="col-sm-12 col-md-6 col-lg-3">
          <img src={Image.bestselling1} alt="bestselling" className="best-selling"/>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
          <img src={Image.bestselling2} alt="bestselling" className="best-selling"/>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
          <img src={Image.bestselling3} alt="bestselling" className="best-selling "/>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
          <img src={Image.bestselling4} alt="bestselling" className="best-selling"/>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
          <img src={Image.bestselling1} alt="bestselling" className="best-selling"/>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
          <img src={Image.bestselling2} alt="bestselling" className="best-selling"/>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
          <img src={Image.bestselling3} alt="bestselling" className="best-selling"/>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
          <img src={Image.bestselling4} alt="bestselling" className="best-selling"/>
            </div>
          </div>
        </div>
    </>
  );
}
