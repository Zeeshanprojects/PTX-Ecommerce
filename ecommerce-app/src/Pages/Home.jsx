import React, { useEffect, useState } from "react";
import Image from "../Images/Image";
import "./Home.css";

import { Link } from "react-router-dom";
import axios from "axios"; // ✅ Import axios

// const containerVariant = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.15,
//     },
//   },
// };
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

  //   <motion.div
  //     className="container-fluid my-5"
  //     initial="hidden"
  //     whileInView="visible"
  //     viewport={{ once: true }}
  //     variants={fadeInUp}
  //   >
  //     <h3 className="text-center mb-4 text-uppercase">{category} Collection</h3>
  //     <div className="row g-4">
  //       {items.map((product) => (
  //         <div className="col-sm-12 col-md-6 col-lg-2" key={product.id}>
  //           <div className="product-card position-relative overflow-hidden rounded shadow-sm">
  //             <span className="new-badge position-absolute top-0 start-0 m-2">
  //               NEW
  //             </span>
  //             <div className="product-img-container position-relative">
  //               <img
  //                 src={product.image}
  //                 alt={product.name}
  //                 className="img-fluid product-img"
  //               />
  //             </div>
  //             <div className="p-3" style={{ background: "Transparent" }}>
  //               {/* <h6 className="mb-1">{product.name}</h6>
  //               <p className="text-muted mb-1">{product.price}</p> */}
  //             </div>
  //           </div>
  //         </div>
  //       ))}
  //     </div>
  //     <div className="text-center mt-4">
  //       <Link to={route}>
  //         <button className="btn btn-outline-dark ps-5 pe-5">
  //           View All Collection
  //         </button>
  //       </Link>
  //     </div>
  //   </motion.div>
  // );

  return (
    <>
      <div className="image-wrapper">
        <img
          src={Image.mainbanner}
          alt="slider-image1"
          className="sliderimage"
        />
        <div className="main-btn">
          <Link to="/Shop">
            <button className="btn btn-outline-light mt-4 ps-5 pe-5 ">
              SHOP NOW
            </button>
          </Link>
        </div>
      </div>

      <div className="space"></div>
      <div className="container-fluid ">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-2 col-xl-2">
            <h3 className="category_mainheading mt-5">
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
          <div className="col-sm-12 col-md-12 col-lg-2 col-xl-2 text-center">
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
      </div>

      <div className="space"></div>

      <div className="space"></div>

      {/* Shared Animation with Images */}
      <h2 className="text-center" variants={fadeInUp}>
        SEARCH BY CATEGORIES
      </h2>

      <div className="space"></div>

      <div className="container-fluid p-0 m-0 h-100">
        <div className="row gx-1 gy-1 m-2">
          {[
            { img: Image.Menpic, title: "MENS" },
            { img: Image.WomenTshirt, title: "WOMENS " },
            { img: Image.Kidpic, title: "JUNIOR" },
          ].map((item, idx) => (
            <div key={idx} className="col-sm-12 col-md-6 col-lg-4 h-100">
              <div className="position-relative overflow-hidden">
                <span className="badge bg-danger position-absolute top-0 end-0 m-2">
                  SALE
                </span>
                <img src={item.img} alt="bestselling" className="categories" />

                {/* Overlay */}
                <div className="overlay d-flex flex-column justify-content-center align-items-center">
                  <h2 className="text-white">{item.title}</h2>
                  <button className="btn btn-outline-light btn-lg mt-2">
                    VIEW COLLECTIO
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space"></div>

      <div className="space"></div>

      {/* Shared Animation with Images */}
      <h2 className="text-center" variants={fadeInUp}>
        BEST SELLINGS
      </h2>

      <div className="space"></div>
      <div className="row m-2">
        {/* Left Column */}
        <div className="left-column col-6 m-0 p-0 h-100">
          <div className="container-fluid mb-2 h-100">
            <div className="row g-2">
              <div className="col-6">
                <img src={Image.category1} className="img-background " />
              </div>
              <div className="col-6">
                <img src={Image.category2} className="img-background" />
              </div>
              <div className="col-6">
                <img src={Image.category3} className="img-background" />
              </div>
              <div className="col-6">
                <img src={Image.category4} className="img-background" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="right-column col-6 d-flex m-0 p-0 ">
          <img
            src={Image.rightbanner}
            alt="rightbanner"
            className="right-banner-img"
          />
          <div className="overlay-text">
            <h5> SALE IS ON</h5>
            <h1>50 % OFF</h1>

            <button
              type="button"
              class="btn btn-outline-light btn-lg ps-5 pe-5 mt-3"
            >
              SHOP NOW
            </button>
          </div>
        </div>
      </div>

      <div className="space"></div>

      {/* Product Grid */}

      <h2 className="uppercase text-center">
        CURATED ESSENTIALS FOR A TIMELESS WARDROBE
      </h2>
      <p className="text-center">
        Complement your everyday style with timeless essential items
      </p>
      <div className="container-fluid">
        <div className="row justify-content-center m-3">
          {/* Big main image */}
          <div className="col-lg-3 col-md-12">
            <img
              src={Image.bestseller1}
              className="main-image img-fluid img-background"
              alt="Main"

            />
          </div>

          {/* Small product images */}
          <div className="col-lg-8 col-md-12">
            <div className="row g-2">
              <div className="col-3">
                <img
                  src={Image.image1}
                  className="small-image img-fluid img-background "
                  alt="Product 1"
                />
              </div>
              <div className="col-3">
                <img
                  src={Image.image2}
                  className="small-image img-fluid img-background"
                  alt="Product 2"
                />
              </div>
              <div className="col-3">
                <img
                  src={Image.image3}
                  className="small-image img-fluid img-background"
                  alt="Product 3"
                />
              </div>
              <div className="col-3">
                <img
                  src={Image.image4}
                  className="small-image img-fluid img-background"
                  alt="Product 4"
                />
              </div>
              <div className="col-3">
                <img
                  src={Image.image4}
                  className="small-image img-fluid img-background"
                  alt="Product 4"
                />
              </div>
              <div className="col-3">
                <img
                  src={Image.image5}
                  className="small-image img-fluid img-background"
                  alt="Product 1"
                />
              </div>
              <div className="col-3">
                <img
                  src={Image.image6}
                  className="small-image img-fluid img-background"
                  alt="Product 2"
                />
              </div>
              <div className="col-3">
                <img
                  src={Image.image7}
                  className="small-image img-fluid img-background"
                  alt="Product 3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row justify-content-center m-3">
          {/* Big main image */}
          <div className="col-lg-3 col-md-12">
            <img
              src={Image.bestseller3}
              className="main-image img-fluid img-background"
              alt="Main"
            />
          </div>

          {/* Small product images */}
          <div className="col-lg-8 col-md-12">
            <div className="row g-2">
              <div className="col-3">
                <img
                  src={Image.image1}
                  className="small-image img-fluid img-background"
                  alt="Product 1"
                />
              </div>
              <div className="col-3">
                <img
                  src={Image.image2}
                  className="small-image img-fluid img-background"
                  alt="Product 2"
                />
              </div>
              <div className="col-3">
                <img
                  src={Image.image3}
                  className="small-image img-fluid img-background"
                  alt="Product 3"
                />
              </div>
              <div className="col-3">
                <img
                  src={Image.image4}
                  className="small-image img-fluid img-background"
                  alt="Product 4"
                />
              </div>
              <div className="col-3">
                <img
                  src={Image.image4}
                  className="small-image img-fluid img-background"
                  alt="Product 4"
                />
              </div>
              <div className="col-3">
                <img
                  src={Image.image1}
                  className="small-image img-fluid img-background"
                  alt="Product 1"
                />
              </div>
              <div className="col-3">
                <img
                  src={Image.image2}
                  className="small-image img-fluid img-background"
                  alt="Product 2"
                />
              </div>
              <div className="col-3">
                <img
                  src={Image.image3}
                  className="small-image img-fluid img-background"
                  alt="Product 3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="image-wrapper">
        <img src={Image.banner} alt="slider-image1" className="sliderimage" />
        <div className="main-btn">
          <Link to="/Shop">
            <button className="btn btn-outline-light mt-4 ps-5 pe-5 ">
              SHOP NOW
            </button>
          </Link>
        </div>
      </div>

      <div
        className="container-fluid py-5"
        style={{ backgroundColor: "##FFFFFF" }}
      >
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="text-center">
              <h3 className="mb-4 text-dark">Subscribe to Our Newsletter</h3>
              <p className="mb-4 text-dark">
                Stay updated with the latest trends, offers, and news. Sign up
                for our newsletter!
              </p>

              <form onSubmit={handleSubscription}>
                <div className="input-group mb-3">
                  <input
                    type="email"
                    className="form-control  text-white border-black "
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button className="btn btn-light ms-2" type="submit">
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
