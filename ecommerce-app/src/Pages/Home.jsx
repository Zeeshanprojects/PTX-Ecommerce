import React, { useEffect, useState } from "react";
import Image from "../Images/Image";
import "./Home.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import axios from "axios"; // ✅ Import axios

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 1.2, // 👈 Try 1.2 seconds for a smoother feel
      ease: "easeOut" // 👈 Optional, makes it even smoother
    } 
  },
};

export default function Home() {
  useEffect(() => {
    document.title = "Home | Pakistan Textile Exchange";
  }, []);

  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscription = async (e) => {
    e.preventDefault();
    if (email.trim()) {
      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/api/EcommerceNews",
          { email }
        );
        if (response.status === 200 || response.status === 201) {
          setSubscribed(true);
          setEmail("");
          setTimeout(() => setSubscribed(false), 5000);
        }
      } catch (error) {
        console.error("Subscription failed:", error);
      }
    }
  };

  const products = {
    Mens: [
      { id: 1, name: "Yellow", price: "$ 5.00 USD", image: Image.image1 },
      { id: 2, name: "Red", price: "$ 5 USD", image: Image.image2 },
      { id: 3, name: "Urban Black Shirt", price: "$ 5 USD", image: Image.image3 },
      { id: 4, name: "Ocean Blue Tee", price: "$ 5 USD", image: Image.image4 },
    ],
    Kids: [
      { id: 10, name: "Red Kid Tee", price: "$ 5 USD", image: Image.image10 },
      { id: 11, name: "Cartoon Tee", price: "$ 5 USD", image: Image.image11 },
      { id: 12, name: "Tiny Green Tee", price: "$ 5 USD", image: Image.image12 },
      { id: 13, name: "Red Kid Tee", price: "$ 5 USD", image: Image.image13 },
    ],
    Fleece: [
      { id: 14, name: "Fleece One", price: "$ 5 USD", image: Image.Fleece1 },
      { id: 15, name: "Fleece Two", price: "$ 5 USD", image: Image.Fleece2 },
      { id: 16, name: "Fleece Three", price: "$ 5 USD", image: Image.Fleece3 },
      { id: 17, name: "Fleece Four", price: "$ 5 USD", image: Image.Fleece4 },
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
              <span className="new-badge position-absolute top-0 start-0 m-2">NEW</span>
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
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <Link to={route}>
          <button className="btn btn-outline-dark ps-5 pe-5">View All Collection</button>
        </Link>
      </div>
    </motion.div>
  );

  return (
    <>
      <div className="image-wrapper">
        <img src={Image.banner} alt="slider-image1" className="sliderimage" />
        <div className="imagetext">
          <Link to="/Shop">
            <button className="btn btn-outline-light mt-4 ps-5 pe-5 main-btn">SHOP NOW</button>
          </Link>
        </div>
      </div>

      <div className="space"></div>
     <motion.div
      className="container-fluid"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      <h2 className="text-center">POPULAR CATEGORIES</h2>
      <div className="space"></div>
      <div className="row justify-content-center text-center">
        {[
          { label: "T-SHIRTS", image: Image.bestselling1 },
          { label: "FLEECE", image: Image.fleece },
          { label: "KIDS", image: Image.junior },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="col-6 col-sm-4 col-md-2 mb-4"
            variants={fadeInUp}
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
    </motion.div>

      <br />
      <h2 className="text-center">BEST SELLINGS</h2>
      <div className="space"></div>

      <div className="container-fluid p-0">
        <div className="row gx-1 gy-1">
          {[Image.bestselling1, Image.bestselling2, Image.bestselling3, Image.bestselling4, Image.bestselling6, Image.bestselling7, Image.bestselling8, Image.bestselling9].map((imgSrc, idx) => (
            <div key={idx} className="col-sm-12 col-md-6 col-lg-3">
              <motion.div
                className="position-relative"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                <span className="badge bg-danger position-absolute top-0 end-0 m-2">SALE</span>
                <img src={imgSrc} alt="bestselling" className="best-selling img-fluid" />
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      <motion.div className="text-center mt-5" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
        <h2 className="uppercase">CURATED ESSENTIALS FOR A TIMELESS WARDROBE</h2>
        <p>Complement your everyday style with timeless essential items</p>
      </motion.div>

      {renderProductSection("T-Shirts", products.Mens, "/T-Shirts")}
      {renderProductSection("Kids", products.Kids, "/Kid")}
      {renderProductSection("Fleece", products.Fleece, "/Fleece")}

      <motion.div className="container-fluid p-0" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
        <img src={Image.Fashion_Banner} alt="banner" className="banner" />
      </motion.div>

      <div className="space"></div>

      <motion.div className="container" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
        <div className="row text-center">
          {[Image.icon1, Image.icon2, Image.icon3].map((icon, i) => (
            <div key={i} className="col-sm-4 col-lg-4 col-xl-4">
              <div className="info-box">
                <img src={icon} alt="icons" className="info-icon" />
                <h5>{["SUPPORT 24/7", "TRACK YOUR ORDER", "RETURN & EXCHANGES"][i]}</h5>
                <p>{["Contact us 24 hours a day, 7 days a week", "Click for the quick update on your order", "Please view the return and exchange policy"][i]}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ✅ Newsletter Section (Corrected) */}
      <div className="container-fluid py-5" style={{ backgroundColor: "#000000" }}>
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="text-center">
              <h3 className="mb-4 text-white">Subscribe to Our Newsletter</h3>
              <p className="mb-4 text-white">
                Stay updated with the latest trends, offers, and news. Sign up for our newsletter!
              </p>

              <form onSubmit={handleSubscription}>
                <div className="input-group mb-3">
                  <input
                    type="email"
                    className="form-control bg-transparent text-white border-white"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button className="btn btn-light px-4" type="submit">
                    Subscribe
                  </button>
                </div>
              </form>

              {subscribed && (
                <div className="alert alert-success mt-3">
                  Thank you for subscribing!
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
