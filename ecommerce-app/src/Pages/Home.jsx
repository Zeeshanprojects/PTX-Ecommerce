import React from "react";
import Image from "../Images/Image";
import "./Home.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Home() {
  const products = {
    Mens: [
      { id: 1, name: "Yellow", price: "PKR 1,999", image: Image.image1 },
      { id: 2, name: "Red", price: "PKR 2,299", image: Image.image2 },
      {
        id: 3,
        name: "Urban Black Shirt",
        price: "PKR 2,799",
        image: Image.image3,
      },
      {
        id: 4,
        name: "Ocean Blue Tee",
        price: "PKR 2,499",
        image: Image.image4,
      },
    ],
    Womens: [
      {
        id: 6,
        name: "Urban Pink Tee",
        price: "PKR 2,799",
        image: Image.image6,
      },
      { id: 7, name: "Sunset Orange", price: "PKR 1,999", image: Image.image8 },
      {
        id: 8,
        name: "Mint Green Tee",
        price: "PKR 2,299",
        image: Image.image7,
      },
      {
        id: 9,
        name: "Ocean Blue Tee",
        price: "PKR 2,499",
        image: Image.image5,
      },
    ],
    Kids: [
      { id: 10, name: "Red Kid Tee", price: "PKR 1,499", image: Image.image10 },
      { id: 11, name: "Cartoon Tee", price: "PKR 1,199", image: Image.image11 },
      {
        id: 12,
        name: "Tiny Green Tee",
        price: "PKR 1,299",
        image: Image.image12,
      },
      { id: 13, name: "Red Kid Tee", price: "PKR 1,499", image: Image.image13 },
    ],
  };

  const renderProductSection = (category, items, route) => (
    <motion.div
      className="container my-5"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <h3 className="text-center mb-4 text-uppercase">{category} Collection</h3>
      <div className="row g-4">
        {items.map((product) => (
          <div className="col-sm-12 col-md-6 col-lg-3" key={product.id}>
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
              </div>
              <div className="p-3">
                <h6 className="mb-1">{product.name}</h6>
                <p className="text-muted mb-1">{product.price}</p>
                <div className="buttons ">
                  <button type="button" className="sizes btn-outline-dark">
                    S
                  </button>
                  <button type="button" className="sizes btn-outline-dark">
                    M
                  </button>
                  <button type="button" className="sizes btn-outline-dark">
                    L
                  </button>
                  <button type="button" className="sizes btn-outline-dark">
                    XL
                  </button>
                  <button type="button" className="sizes btn-outline-dark">
                    2XL
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <Link to={route}>
          <button className="btn btn-outline-dark ps-5 pe-5 ">
            View All Collection
          </button>
        </Link>
      </div>
    </motion.div>
  );

  return (
    <>
      <div className="image-wrapper">
        <img src={Image.banner} alt="slider-image1" className="sliderimage" />
        <div className="imagetext">
          <button
            type="button"
            className="btn btn-outline-light mt-4 ps-5 pe-5 "
          >
            SHOP NOW
          </button>
        </div>
      </div>

      <div className="space"></div>
      <div className="container-fluid">
  <h2 className="text-center">POPULAR CATEGORIES</h2>
  <div className="space"></div>
  <div className="row justify-content-center text-center">
    {[
      { label: "MEN", image: Image.bestselling1 },
      { label: "FLEECE", image: Image.fleece },
      { label: "JEANS", image: Image.jeans },
      { label: "HOODIES", image: Image.hoddies },
      { label: "WOMEN", image: Image.WomenTshirt },
      { label: "JUNIORS", image: Image.junior },
    ].map((item, index) => (
      <motion.div
        key={index}
        className="col-6 col-sm-4 col-md-2 mb-4"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="text-center">
          <img
            src={item.image}
            alt={item.label}
            className="img-fluid category-img"
          />
          <p className="mt-2">{item.label}</p>
        </div>
      </motion.div>
    ))}
  </div>
</div>

     <br/>
      <h2 className="text-center">BEST SELLINGS</h2>
      <div className="space"></div>

      <div className="container-fluid p-0">
        <div className="row gx-1 gy-1">
          {[
            Image.bestselling1,
            Image.bestselling2,
            Image.bestselling3,
            Image.bestselling4,
            Image.bestselling6,
            Image.bestselling7,
            Image.bestselling8,
            Image.bestselling9,
          ].map((imgSrc, idx) => (
            <div key={idx} className="col-sm-12 col-md-6 col-lg-3">
              <motion.div
                className="position-relative"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                <span className="badge bg-danger position-absolute top-0 end-0 m-2">
                  SALE
                </span>
                <img
                  src={imgSrc}
                  alt="bestselling"
                  className="best-selling img-fluid"
                />
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      <motion.div
        className="text-center mt-5"
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

      {/* Product Sections with individual route paths */}
      {renderProductSection("Men", products.Mens, "/Men")}
      {renderProductSection("Women", products.Womens, "/Women")}
      {renderProductSection("Kid", products.Kids, "/Kid")}

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
                  {
                    ["SUPPORT 24/7", "TRACK YOUR ORDER", "RETURN & EXCHANGES"][
                      i
                    ]
                  }
                </h5>
                <p>
                  {
                    [
                      "Contact us 24 hours a day, 7 days a week",
                      "Click for the quick update on your order",
                      "Please view the return and exchange policy",
                    ][i]
                  }
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
}
