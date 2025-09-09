import React, { useEffect, useState } from "react";
import Image from "../Images/Image";
import "./Home.css";

import { Link } from "react-router-dom";
import axios from "axios";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: "easeOut",
    },
  },
};

export default function Home() {
  useEffect(() => {
    document.title = "Home | PTX Ecommerce";
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

  return (
    <>
      <div className="image-wrapper " data-aos="fade-up">
        <img
          src={Image.mainbanner}
          alt="slider-image1"
          className="bannerimage"
        />
        <div className="main-btn">
          <Link to="/shop">
            <button className="btn btn-outline-light ps-5 pe-5 ">
              SHOP NOW
            </button>
          </Link>
        </div>
      </div>

      <div className="space"></div>

      {/* Shared Animation with Images */}
      <h2 className="text-center fw-bold" data-aos="fade-up">
        SEARCH BY CATEGORIES
      </h2>
      <p className="text-center" data-aos="fade-up">
        Explore our collections by category to quickly find the styles that suit
        your look
      </p>

      <div className="space"></div>

      <div className="container-fluid p-0 m-0 h-100" data-aos="fade-up">
        <div className="row gx-1 gy-1">
          {[
            { img: Image.Menpic, title: "MEN", path: "/Men" },
            { img: Image.WomenTshirt, title: "JUNIOR", path: "/junior" },
            { img: Image.Denim, title: "DENIM", path: "/denim" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="col-sm-12 col-md-12 col-lg-4 col-xl-4 h-100"
            >
              <div className="position-relative overflow-hidden">
                <img src={item.img} alt={item.title} className="categories" />

                {/* Overlay */}
                <div className="overlay d-flex flex-column justify-content-center align-items-center">
                  <h2 className="text-white">{item.title}</h2>
                  <Link to={item.path}>
                    <button className="btn btn-outline-light btn-lg mt-2">
                      VIEW COLLECTION
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space"></div>

      <div className="space"></div>

      {/* Shared Animation with Images */}
      <h2 className="text-center fw-bold" data-aos="fade-up">
        BEST SELLINGS
      </h2>
      <p className="text-center" data-aos="fade-up">
        Our top-selling essentials, curated for you
      </p>

      <div className="space"></div>
      <div className="row m-1">
        {/* Left Column */}
        <div
          className="left-column col-sm-12 col-md-12 col-lg-6 col-xl-6 m-0 p-0 h-100 mt-2"
          data-aos="fade-up"
        >
          <div className="container-fluid p-2 mb-2 h-100">
            <div className="row g-2">
              <div className="col-6 m-0 mb-2">
                <img src={Image.category1} className="img-background " />
              </div>
              <div className="col-6 m-0 mb-2">
                <img src={Image.category2} className="img-background" />
              </div>
              <div className="col-6 m-0">
                <img src={Image.category3} className="img-background" />
              </div>
              <div className="col-6 m-0">
                <img src={Image.category4} className="img-background" />
              </div>
            </div>
          </div>
        </div>

        <div
          className="right-column col-sm-12 col-md-12 col-lg-6 col-xl-6 d-flex m-0 p-0 "
          data-aos="fade-up"
        >
          <img
            src={Image.rightbanner}
            alt="rightbanner"
            className="right-banner-img"
          />
          <div className="overlay-text">
            <h5> SALE IS ON</h5>
            <h1>50 % OFF</h1>
            {/* <a href="/product-section">
              <button
                type="button"
                class="btn btn-outline-light btn-lg ps-5 pe-5 mt-3"
              >
                SHOP NOW
              </button>
            </a> */}
          </div>
        </div>
      </div>

      <div className="space"></div>

      {/* Product Grid */}
<div id="product-section">
  <h2 className="uppercase text-center fw-bold" data-aos="fade-up">
        CURATED ESSENTIALS FOR A TIMELESS WARDROBE
      </h2>
      <p className="text-center" data-aos="fade-up">
        Essential styles designed for comfort, versatility, and timeless appeal
      </p>
      <div className="space"></div>
      <div className="container-fluid mb-2 p-0">
        {/* 1st Row */}
        <div className="row g-0 p-0 m-0">
          <div
            className="col-sm-12 col-md-6 position-relative "
            data-aos="fade-up"
          >
            <img
              src={Image.productbanner1}
              alt="smallbanner"
              className="w-100 p-0 m-0"
            />
            <div className="banner-text">
              <h2 className="text-white">COLLARED NECK</h2>
              <p className="text-white">
                Smart casual polo with a classic collar and <br /> button
                placket.
              </p>
              <Link to="/Collaredneck">
                <button className="btn btn-outline-light ps-3 pe-3 m-0 collection-btn">
                  VIEW COLLECTION
                </button>
              </Link>
            </div>
          </div>
          <div
            className="col-sm-12 col-md-6 position-relative "
            data-aos="fade-up"
          >
            <img
              src={Image.productbanner2}
              alt="smallbanner"
              className="w-100"
            />
            <div className="banner-text">
              <h2 className="text-dark">FLEECE CREWNECK</h2>
              <p className="text-dark">
                Cozy fleece sweatshirt with a round neckline for <br /> everyday
                comfort.
              </p>
              <Link to="/Fleece">
                <button className="btn btn-outline-dark ps-3 pe-3 m-0 collection-btn">
                  VIEW COLLECTION
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* 2nd Row (Flipped on Desktop) */}
        <div className="row g-0 p-0 m-0">
          <div
            className="col-sm-12 col-md-6 order-2 order-md-1 position-relative "
            data-aos="fade-up"
          >
            <img
              src={Image.productbanner3}
              alt="smallbanner"
              className="w-100"
            />
            <div className="banner-text">
              <h2 className="text-dark">BOAT NECK</h2>
              <p className="text-dark">
                Stylish wide-neck fleece with a relaxed, modern fit.
              </p>
              <Link to="/Boatneck">
                <button className="btn btn-outline-dark ps-3 pe-3 m-0 collection-btn">
                  VIEW COLLECTION
                </button>
              </Link>
            </div>
          </div>
          <div
            className="col-sm-12 col-md-6 order-1 order-md-2 position-relative "
            data-aos="fade-up"
          >
            <img
              src={Image.productbanner4}
              alt="smallbanner"
              className="w-100"
            />
            <div className="banner-text">
              <h2 className="text-white">PULLOVER HOODIES</h2>
              <p className="text-white">
                Classic hoodie with drawstring hood and <br /> kangaroo pocket.
              </p>
              <Link to="/Pulloverhoodie">
                <button className="btn btn-outline-light ps-3 pe-3 m-0 collection-btn">
                  VIEW COLLECTION
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* 3rd Row */}
        <div className="row g-0 p-0 m-0">
          <div
            className="col-sm-12 col-md-6 position-relative "
            data-aos="fade-up"
          >
            <img
              src={Image.productbanner8}
              alt="smallbanner"
              className="w-100 p-0 m-0"
            />
            <div className="banner-text">
              <h2 className="text-white">FLANNEL SHIRTS</h2>
              <p className="text-white">
                Timeless flannel design, perfect for layering
                <br /> and casual style
              </p>
              <Link to="/shirts">
                <button className="btn btn-outline-light ps-3 pe-3 m-0 collection-btn">
                  VIEW COLLECTION
                </button>
              </Link>
            </div>
          </div>
          <div
            className="col-sm-12 col-md-6 position-relative "
            data-aos="fade-up"
          >
            <img
              src={Image.productbanner6}
              alt="smallbanner"
              className="w-100"
            />
            <div className="banner-text">
              <h2 className="text-dark">MINERAL WASH</h2>
              <p className="text-dark">
                Timeless round-neck sweatshirt with ribbed <br /> cuffs and hem
              </p>
              <Link to="/Mineralwash">
                <button className="btn btn-outline-dark ps-3 pe-3 m-0 collection-btn">
                  VIEW COLLECTION
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* 4th Row (Flipped on Desktop) */}
        <div className="row g-0 p-0 m-0">
          <div
            className="col-sm-12 col-md-6 order-2 order-md-1 position-relative"
            data-aos="fade-up"
          >
            <img
              src={Image.productbanner9}
              alt="smallbanner"
              className="w-100"
            />
            <div className="banner-text">
              <h2 className="text-dark">CROP TEE</h2>
              <p className="text-dark">
                Everyday essential crop tee for comfort and style
              </p>
              <Link to="/croptee">
                <button className="btn btn-outline-dark ps-3 pe-3 m-0 collection-btn">
                  VIEW COLLECTION
                </button>
              </Link>
            </div>
          </div>
          <div
            className="col-sm-12 col-md-6 order-1 order-md-2 position-relative"
            data-aos="fade-up"
          >
            <img
              src={Image.productbanner10}
              alt="smallbanner"
              className="w-100"
            />
            <div className="banner-text">
              <h2 className="text-light">PUFFERS</h2>
              <p className="text-light">
                Trendy puffer outerwear for a sleek winter look
              </p>
              <Link to="/puffers">
                <button className="btn btn-outline-light ps-3 pe-3 m-0 collection-btn">
                  VIEW COLLECTION
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* 5th Row */}
        <div className="row g-0 p-0 m-0">
          <div
            className="col-sm-12 col-md-6 position-relative"
            data-aos="fade-up"
          >
            <img
              src={Image.productbanner5}
              alt="smallbanner"
              className="w-100"
            />
            <div className="banner-text">
              <h2 className="text-light">SHORT</h2>
              <p className="text-light">
                Classic shorts with side pockets and an easy <br /> drawstring
                waist
              </p>
              <Link to="/short">
                <button className="btn btn-outline-light ps-3 pe-3 m-0 collection-btn">
                  VIEW COLLECTION
                </button>
              </Link>
            </div>
          </div>
          <div
            className="col-sm-12 col-md-6 position-relative"
            data-aos="fade-up"
          >
            <img
              src={Image.productbanner7}
              alt="smallbanner"
              className="w-100"
            />
            <div className="banner-text">
              <h2 className="text-dark">SANDOW</h2>
              <p className="text-dark">
                Durable and comfortable sandow for a relaxed,
                <br /> casual look
              </p>
              <Link to="/sandow">
                <button className="btn btn-outline-dark ps-3 pe-3 m-0 collection-btn">
                  VIEW COLLECTION
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
</div>
      

      <div className="space"></div>
      <div className="container-fluid " data-aos="fade-up">
        <div className="row">
          <h2 className="uppercase text-center mb-5 fw-bold">
            DRESS SHARP, LIVE SMART
          </h2>

          <div className="col-sm-6 col-md-6 col-lg-2 col-xl-2 text-center offset-lg-1">
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

      <div className="image-wrapper" data-aos="fade-up">
        <img src={Image.banner} alt="slider-image1" className="bannerimage" />
      </div>

      <div
        className="container-fluid py-5"
        data-aos="fade-up"
        style={{ backgroundColor: "##FFFFFF" }}
      >
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="text-center">
              <h3 className="mb-4 text-dark text-uppercase fw-bold">
                Subscribe to Our Newsletter
              </h3>
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
