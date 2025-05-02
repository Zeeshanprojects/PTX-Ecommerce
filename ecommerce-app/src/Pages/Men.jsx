import React from "react";
import { motion } from "framer-motion";
import Image from "../Images/Image";
import "./Home.css";


const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
export default function Men() {
    const mensProducts = [
        { id: 1, name: "Yellow", price: "PKR 1,999", image: Image.image1 },
        { id: 2, name: "Red", price: "PKR 2,299", image: Image.image2 },
        { id: 3, name: "Urban Black Shirt", price: "PKR 2,799", image: Image.image3 },
        { id: 4, name: "Ocean Blue Tee", price: "PKR 2,499", image: Image.image4 },
        { id: 5, name: "Yellow", price: "PKR 1,999", image: Image.image5 },
        { id: 6, name: "Red", price: "PKR 2,299", image: Image.image6 },
        { id: 7, name: "Urban Black Shirt", price: "PKR 2,799", image: Image.image7 },
        { id: 8, name: "Ocean Blue Tee", price: "PKR 2,499", image: Image.image8 },
      ];
       
  return (
   <>
   <div className='image-container'>
<img src={Image.Men} alt='men' className='sub-banner-image'/></div>
<motion.div
      className="container my-5"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
    
      <div className="row g-4">
        {mensProducts.map(product => (
          <div className="col-sm-12 col-md-6 col-lg-3" key={product.id}>
            <div className="product-card position-relative overflow-hidden rounded shadow-sm">
              <span className="new-badge position-absolute top-0 start-0 m-2">NEW</span>
              <div className="product-img-container position-relative">
                <img src={product.image} alt={product.name} className="img-fluid product-img" />
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
   </>
  )
}
