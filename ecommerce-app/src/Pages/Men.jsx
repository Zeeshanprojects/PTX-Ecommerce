import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Image from "../Images/Image"; // make sure your images are exported properly

export default function Men() {
  useEffect(()=>{
    document.title="Men - PTX Ecommerce"
  })
  // Hardcoded products
  const [products] = useState([
    {
      title: "Collared Neck",
      price: 10.99,
      image: Image.CollaredNeck1,
      color:"Onyx",
      GSM:"180",
    },
    {
      title: "Collared Neck",
      price: 10.99,
      image: Image.CollaredNeck2, 
      color:"Oxford Blue",
      GSM:"180",
    },
    {
      title: "Collared Neck",
      price: 10.99,
      image: Image.CollaredNeck3, 
       color:"Oxford Blue",
      GSM:"180",
    },
    {
      title: "Collared Neck",
      price: 10.99,
      image: Image.CollaredNeck4, 
      color:"Cadmium Red",
      GSM:"180",
    },
    {
      title: "Collared Neck",
      price: 10.99,
      image: Image.CollaredNeck5,
        color:"Black",
      GSM:"180", 
    },
    {
      title: "Collared Neck",
      price: 10.99,
      image: Image.CollaredNeck6, 
        color:"Dark Ten",
      GSM:"180", 
    },
    {
      title: "Collared Neck",
      price: 10.99,
      image: Image.CollaredNeck7, 
        color:"Bone",
      GSM:"180", 
    },
    {
      title: "Collared Neck",
      price: 10.99,
      image: Image.CollaredNeck8, 
        color:"Shadow",
      GSM:"180", 
    },
 
    {
      title: "Fleece",
      price: 10.99,
      image: Image.Fleece1, 
        color:"Gainsboro",
      GSM:"180", 
    },
    {
      title: "Fleece",
      price: 10.99,
      image: Image.Fleece2,
       color:"Hunter Green",
      GSM:"180",  
    },
    {
      title: "Fleece",
      price: 10.99,
      image: Image.Fleece3, 
        color:"Light Slate Gray",
      GSM:"180",  
    },
    {
      title: "Fleece",
      price: 10.99,
      image: Image.Fleece4, 
       color:"Opera mauve",
      GSM:"180", 
    },
    {
      title: "Fleece",
      price: 10.99,
      image: Image.Fleece5,
       color:"Pale Silver",
      GSM:"180",  
    },
    {
      title: "Fleece",
      price: 10.99,
      image: Image.Fleece6, 
       color:"Trolley Gray",
      GSM:"180",  
    },
    {
      title: "Fleece",
      price: 10.99,
      image: Image.Fleece7, 
    },
    {
      title: "Fleece",
      price: 10.99,
      image: Image.Fleece8, 
    },
    {
      title: "Fleece",
      price: 10.99,
      image: Image.Fleece9,
    },
    {
      title: "Fleece",
      price: 10.99,
      image: Image.Fleece10, 
    },
    {
      title: "Fleece",
      price: 10.99,
      image: Image.Fleece11, 
    },
    {
      title: "Fleece",
      price: 10.99,
      image: Image.Fleece12, 
    },
    {
      title: "Fleece",
      price: 10.99,
      image: Image.Fleece13, 
    },
    {
      title: "Fleece",
      price: 10.99,
      image: Image.Fleece14, 
    },
    {
      title: "Fleece",
      price: 10.99,
      image: Image.Fleece15, 
    },
    {
      title: "Fleece",
      price: 10.99,
      image: Image.Fleece16, 
    },
    {
      title: "Fleece",
      price: 10.99,
      image: Image.Fleece17, 
    },
    {
      title: "Fleece",
      price: 10.99,
      image: Image.Fleece18, 
    },
   
      {
      title: "Mineral Wash",
      price: 10.99,
      image: Image.Mineralwash1, 
    },
      {
      title: "Mineral Wash",
      price: 10.99,
      image: Image.Mineralwash2, 
    },
      {
      title: "Mineral Wash",
      price: 10.99,
      image: Image.Mineralwash3, 
    },
      {
      title: "Mineral Wash",
      price: 10.99,
      image: Image.Mineralwash4, 
    },
      {
      title: "Mineral Wash",
      price: 10.99,
      image: Image.Mineralwash5, 
    },
      {
      title: "Mineral Wash",
      price: 10.99,
      image: Image.Mineralwash6, 
    },
      {
      title: "Mineral Wash",
      price: 10.99,
      image: Image.Mineralwash7, 
    },
      {
      title: "Mineral Wash",
      price: 10.99,
      image: Image.Mineralwash8, 
    },
      {
      title: "Mineral Wash",
      price: 10.99,
      image: Image.Mineralwash9, 
    },
      {
      title: "Mineral Wash",
      price: 10.99,
      image: Image.Mineralwash10, 
    },
      {
      title: "Mineral Wash",
      price: 10.99,
      image: Image.Mineralwash11, 
    },
      {
      title: "Mineral Wash",
      price: 10.99,
      image: Image.Mineralwash12, 
    },
      {
      title: "Mineral Wash",
      price: 10.99,
      image: Image.Mineralwash13, 
    },
     {
      title: "Mineral Wash",
      price: 10.99,
      image: Image.Mineralwash14, 
    },
      {
      title: "Mineral Wash",
      price: 10.99,
      image: Image.Mineralwash15, 
    },
      {
      title: "Mineral Wash",
      price: 10.99,
      image: Image.Mineralwash16, 
    },
     {
      title: "Mineral Wash",
      price: 10.99,
      image: Image.Mineralwash17, 
    },
      {
      title: "Mineral Wash",
      price: 10.99,
      image: Image.Mineralwash18, 
    },
      {
      title: "Hoodie",
      price: 10.99,
      image: Image.Hoodie1, 
    },
     {
      title: "Hoodie",
      price: 10.99,
      image: Image.Hoodie2, 
    },
     {
      title: "Hoodie",
      price: 10.99,
      image: Image.Hoodie3, 
    },
     {
      title: "Hoodie",
      price: 10.99,
      image: Image.Hoodie4, 
    },
     {
      title: "Hoodie",
      price: 10.99,
      image: Image.Hoodie5, 
    },
     {
      title: "Hoodie",
      price: 10.99,
      image: Image.Hoodie6, 
    },
     {
      title: "Hoodie",
      price: 10.99,
      image: Image.Hoodie7, 
    },
     {
      title: "Hoodie",
      price: 10.99,
      image: Image.Hoodie8, 
    },
     {
      title: "Hoodie",
      price: 10.99,
      image: Image.Hoodie9, 
    },
     {
      title: "Hoodie",
      price: 10.99,
      image: Image.Hoodie10, 
    },
     {
      title: "Hoodie",
      price: 10.99,
      image: Image.Hoodie11, 
    },
      {
      title: "Hoodie",
      price: 10.99,
      image: Image.Hoodie12, 
    },
      {
      title: "Hoodie",
      price: 10.99,
      image: Image.Hoodie13, 
    },
      {
      title: "Hoodie",
      price: 10.99,
      image: Image.Hoodie14, 
    },
    {
      title: "Hoodie",
      price: 10.99,
      image: Image.Hoodie15, 
    },
    {
      title: "Hoodie",
      price: 10.99,
      image: Image.Hoodie16, 
    },
    {
      title: "Hoodie",
      price: 10.99,
      image: Image.Hoodie17, 
    },
     {
      title: "Hoodie",
      price: 10.99,
      image: Image.Hoodie18, 
    },
     {
      title: "Flannel Shirt",
      price: 10.99,
      image: Image.Shirt1, 
    },
    {
      title: "Sandow",
      price: 10.99,
      image: Image.Sandow1, 
    },
   
    {
      title: "Short",
      price: 10.99,
      image: Image.Short1, 
    },
  ]);

  const [searchTerm, setSearchTerm] = useState(""); // state for search

  // Filter products based on search
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="background">
        <div className="container-fluid p-lg-5 p-xl-5">
          <div
            className="d-flex flex-column flex-md-row align-items-md-center justify-content-md-between mb-2"
            data-aos="fade-up"
          >
            {/* Title */}
            <h1 className="fw-bold m-0 category-heding mb-2 mb-md-0">
           MEN
            </h1>

            {/* Search Bar */}
            <div style={{ maxWidth: "500px", width: "100%" }}>
              <input
                type="text"
                className="form-control"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <p className="mb-4" data-aos="fade-up">
            OUR PREMIUM QUALITY COLLECTION
          </p>

          {/* Product Grid */}
          <div className="row g-4">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, index) => (
                <div
                  key={index}
                  className="col-sm-12 col-md-6 col-lg-3 col-xl-3 mb-4"
                  data-aos="fade-up"
                >
                  <div className="product-card position-relative overflow-hidden rounded shadow-sm">
                    <span className="new-badge position-absolute top-0 start-0 m-2">
                      NEW
                    </span>
                    <div className="product-img-container position-relative">
                      <Link
                        to="/productinfo"
                        state={{
                          id: index,
                          title: product.title,
                          price: product.price,
                          image: product.image,
                          category: "Fleece",
                        }}
                      >
                        <img
                          src={product.image}
                          alt={product.title}
                          className="img-fluid product-img"
                        />
                      </Link>
                    </div>
                    <div className="p-3">
                      <div className="text-center">
                        <h6 className="mb-1 fw-bold">{product.title}</h6>
                        <p className="text-muted mb-1">USD {product.price}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center">
                <img
                  src={Image.sadface}
                  alt="sadface"
                  style={{ maxWidth: "150px" }}
                />
                <p className="text-muted">No products found.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
