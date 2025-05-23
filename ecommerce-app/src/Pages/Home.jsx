import React, { useEffect, useState } from "react";
import Image from "../Images/Image";
import "./Home.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import axios from "axios"; // ✅ Import axios

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2, // 👈 Try 1.2 seconds for a smoother feel
      ease: "easeOut", // 👈 Optional, makes it even smoother
    },
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
      {
        id: 1,
        name: "PT-5000-Green",
        price: "$ 5.00 USD",
        image: Image.image1,
      },
      { id: 2, name: "Pt-5000-Yellow", price: "$ 5 USD", image: Image.image2 },
      { id: 3, name: "PT-5000-Red", price: "$ 5 USD", image: Image.image3 },
      { id: 4, name: "PT-5000-Blue", price: "$ 5 USD", image: Image.image4 },
      { id: 5, name: "PT-5000-Black", price: "$ 5 USD", image: Image.image5 },
      { id: 6, name: "PT-5000-Gray", price: "$ 5 USD", image: Image.image6 },
    ],
    Kids: [
      { id: 10, name: "W-2050-Gray", price: "$ 5 USD", image: Image.image10 },
      { id: 11, name: "W-2050-Pink", price: "$ 5 USD", image: Image.image11 },
      { id: 12, name: "W-2050-Black", price: "$ 5 USD", image: Image.image12 },
      { id: 13, name: "W-2050-Yellow", price: "$ 5 USD", image: Image.image13 },
      { id: 14, name: "W-2050-Red", price: "$ 5 USD", image: Image.image14 },
      { id: 15, name: "W-2050-Green", price: "$ 5 USD", image: Image.image15 },
    ],
    Fleece: [
      {
        id: 16,
        name: "PT-18000-Brown",
        price: "$ 5 USD",
        image: Image.Fleece1,
      },
      {
        id: 17,
        name: "PT-18000-L-Brown",
        price: "$ 5 USD",
        image: Image.Fleece2,
      },
      { id: 18, name: "PT-18000-Gray", price: "$ 5 USD", image: Image.Fleece3 },
      { id: 19, name: "PT-18000-Blue", price: "$ 5 USD", image: Image.Fleece4 },
      { id: 20, name: "PT-18000-Red", price: "$ 5 USD", image: Image.Fleece5 },
      {
        id: 21,
        name: "PT-18000-Purple",
        price: "$ 5 USD",
        image: Image.Fleece6,
      },
    ],
  };

  const renderProductSection = (category, items, route) => (
    <motion.div
      className="container-fluid my-5"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <h3 className="text-center mb-4 text-uppercase">{category} Collection</h3>
      <div className="row g-4">
        {items.map((product) => (
          <div className="col-sm-12 col-md-6 col-lg-2" key={product.id}>
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
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <Link to={route}>
          <button className="btn btn-outline-dark ps-5 pe-5">
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
          <Link to="/Shop">
            <button className="btn btn-outline-light mt-4 ps-5 pe-5 main-btn">
              SHOP NOW
            </button>
          </Link>
        </div>
      </div>

      <div className="space"></div>
      <div className="container-fluid " >
        <motion.div 
        initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: 0.1 }}
        >
           <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-2 col-xl-2">
            <h3 className="category_mainheading mt-4">
              DRESS SHARP, LIVE SMART
            </h3>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-2 col-xl-2 text-center">
            <div className="icon-wrapper mx-auto">
              <img
                src={Image.categoriesicon1}
                alt="categoryicons"
                className=" mb-2"
              />
            </div>

            <h6 className="category_heading">Trend-Forward Collections</h6>
            <p className="category_font">
              Stay fashionable with our latest styles
            </p>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-2 col-xl-2 text-center">
            <div className="icon-wrapper mx-auto">
              <img
                src={Image.categoriesicon2}
                alt="categoryicons"
                className=" mb-2"
              />
            </div>
            <h6 className="category_heading">Fast Shipping</h6>
            <p className="category_font">
              Get your new clothes quickly with our speedy shipping
            </p>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-2 col-xl-2 text-center">
            <div className="icon-wrapper mx-auto">
              <img
                src={Image.categoriesicon3}
                alt="categoryicons"
                className=" mb-2"
              />
            </div>
            <h6 className="category_heading">Easy Returns</h6>
            <p className="category_font">
              If it doesn't fit or you don't like it, return it easily
            </p>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-2 col-xl-2 text-center">
            <div className="icon-wrapper mx-auto">
              <img
                src={Image.categoriesicon4}
                alt="categoryicons"
                className=" mb-2"
              />
            </div>
            <h6 className="category_heading">Loyalty Rewards</h6>
            <p className="category_font">
              Earn rewards and discounts when you shop with us
            </p>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-2 col-xl-2 text-center">
            <div className="icon-wrapper mx-auto">
              <img
                src={Image.categoriesicon5}
                alt="categoryicons"
                className=" mb-2"
              />
            </div>
            <h6 className="category_heading">Secured Payments</h6>
            <p className="category_font">
              Pay with our safe and secure payment options
            </p>
          </div>
        </div>
        </motion.div>
       
      </div>
    
        <div className="space"></div>
     <motion.div
      variants={containerVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="space"></div>

      {/* Shared Animation with Images */}
      <motion.h2 className="text-center" variants={fadeInUp}>
        BEST SELLINGS
      </motion.h2>

      <div className="space"></div>

      <div className="container-fluid p-0">
        <div className="row gx-1 gy-1">
          {[
            Image.bestselling1,
            Image.bestselling2,
            Image.bestselling3,
            Image.bestselling4,
          ].map((imgSrc, idx) => (
            <div key={idx} className="col-sm-12 col-md-6 col-lg-3">
              <motion.div
                className="position-relative"
                variants={fadeInUp}
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
    </motion.div>

      <div className="space"></div>

      {/* Product Grid */}
     

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

      {renderProductSection("T-Shirts", products.Mens, "/T-Shirts")}
      {renderProductSection("Kids", products.Kids, "/Kid")}
      {renderProductSection("Fleece", products.Fleece, "/Fleece")}

      <motion.div
        className="container-fluid p-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <img src={Image.Fashion_Banner} alt="banner" className="banner" />
      </motion.div>

   
      {/* ✅ Newsletter Section (Corrected) */}
      <div
        className="container-fluid py-5"
        style={{ backgroundColor: "#000000" }}
      >
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="text-center">
              <h3 className="mb-4 text-white">Subscribe to Our Newsletter</h3>
              <p className="mb-4 text-white">
                Stay updated with the latest trends, offers, and news. Sign up
                for our newsletter!
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
