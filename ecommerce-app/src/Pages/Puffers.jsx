import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import Image from "../Images/Image";

export default function Puffers() {
  useEffect(() => {
    document.title = "Puffers - PTX Ecommerce";
  }, []);

  // State for sidebar visibility on small screens
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate=useNavigate()

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Multiple products (categories)
  const products = [
    {
      title: "Puffer",
      price: 10.0,
      fit: "Regular Fit",
      colors: [
        { image: Image.Puffer2, hex: "#DDD9D6",name:"Onyx" },
      
      ],
    },
   
  ];

  // State for selected colors of each product
  const [selectedColors, setSelectedColors] = useState(
    products.map((p) => p.colors[0])
  );

  const [startIndexes, setStartIndexes] = useState(products.map(() => 0));
  const visibleCount = 5;

  const handleNext = (i, product) => {
    if (startIndexes[i] + visibleCount < product.colors.length) {
      const updated = [...startIndexes];
      updated[i] = startIndexes[i] + visibleCount;
      setStartIndexes(updated);
    }
  };

  const handlePrev = (i) => {
    if (startIndexes[i] - visibleCount >= 0) {
      const updated = [...startIndexes];
      updated[i] = startIndexes[i] - visibleCount;
      setStartIndexes(updated);
    }
  };

  // Sidebar filters
  const [openSections, setOpenSections] = useState([
    "productType",
    "size",
    "fit",
    "colors",
  ]);
  const productTypes = [
    "T-Shirts",
    "Longsleeve T-Shirts",
    "Singlets / Tanks",
    "Crew Sweatshirts",
    "Hooded Sweatshirts",
    "Zip Sweatshirts",
    "Trackpants",
    "Shirts",
    "Polos",
    "Pants",
  ];
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const fits = ["Slim Fit", "Regular Fit", "Oversized"];
  const colors = ["White", "Black", "Blue", "Green", "Gray", "Red"];

  const toggleSection = (section) => {
    if (openSections.includes(section)) {
      setOpenSections(openSections.filter((s) => s !== section));
    } else {
      setOpenSections([...openSections, section]);
    }
  };

  return (
    <div className="container-fluid py-4">
      {/* Sidebar Toggle Button for Small Screens */}
      {!isSidebarOpen && (
        <button
          className="btn d-lg-none mb-3 w-100"
          style={{
            backgroundColor: "#f8f9fa",
            border: "1px solid #ddd",
            padding: "8px 16px",
          }}
          onClick={toggleSidebar}
        >
          Open Filters
        </button>
      )}

      <h1
        className={`fw-bold m-0 category-heding mb-2 mb-md-0 ${
          isSidebarOpen ? "d-none d-lg-block" : ""
        }`}
     
      >
      SHORT
      </h1>
      <p className={`mb-4 ${isSidebarOpen ? "d-none d-lg-block" : ""}`} >
        OUR PREMIUM QUALITY COLLECTION
      </p>
      <div className="row mt-4">
        {/* Sidebar */}
        <div
          className={`col-lg-2 border-end pe-4 ${
            isSidebarOpen ? "d-block" : "d-none d-lg-block"
          }`}
    
        >
          {/* Close Button for Sidebar on Small Screens */}
          {isSidebarOpen && (
            <button
              className="btn d-lg-none mb-3 w-100"
              style={{
                backgroundColor: "#f8f9fa",
                border: "1px solid #ddd",
                padding: "8px 16px",
              }}
              onClick={toggleSidebar}
            >
              Close Filters
            </button>
          )}

          {/* Accordion - Product Type */}
          <div className="mb-3">
            <h6
              className="fw-semibold d-flex justify-content-between align-items-center"
              style={{ cursor: "pointer" }}
              onClick={() => toggleSection("productType")}
            >
              Product Type
              <span
                className={`small ms-2 ${
                  openSections.includes("productType") ? "rotate-arrow" : ""
                }`}
              >
                <img src={Image.down} alt="down" className="small-icon" />
              </span>
            </h6>
            {openSections.includes("productType") && (
              <div className="ps-2">
                <ul className="list-unstyled">
                  {productTypes.map((type, index) => (
                    <li key={index} className="mb-1">
                      <input type="checkbox" id={type} />{" "}
                      <label htmlFor={type}>{type}</label>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Accordion - Size */}
          <div className="mb-3">
            <h6
              className="fw-semibold d-flex justify-content-between align-items-center"
              style={{ cursor: "pointer" }}
              onClick={() => toggleSection("size")}
            >
              Size
              <span
                className={`small ms-2 ${
                  openSections.includes("size") ? "rotate-arrow" : ""
                }`}
              >
                <img src={Image.down} alt="down" className="small-icon" />
              </span>
            </h6>
            {openSections.includes("size") && (
              <div className="ps-2">
                <ul className="list-unstyled">
                  {sizes.map((size, index) => (
                    <li key={index} className="mb-1">
                      <input type="checkbox" id={size} />{" "}
                      <label htmlFor={size}>{size}</label>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Accordion - Fit */}
          <div className="mb-3">
            <h6
              className="fw-semibold d-flex justify-content-between align-items-center"
              style={{ cursor: "pointer" }}
              onClick={() => toggleSection("fit")}
            >
              Fit
              <span
                className={`small ms-2 ${
                  openSections.includes("fit") ? "rotate-arrow" : ""
                }`}
              >
                <img src={Image.down} alt="down" className="small-icon" />
              </span>
            </h6>
            {openSections.includes("fit") && (
              <div className="ps-2">
                <ul className="list-unstyled">
                  {fits.map((fit, index) => (
                    <li key={index} className="mb-1">
                      <input type="checkbox" id={fit} />{" "}
                      <label htmlFor={fit}>{fit}</label>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Accordion - Colors */}
          <div className="mb-3">
            <h6
              className="fw-semibold d-flex justify-content-between align-items-center"
              style={{ cursor: "pointer" }}
              onClick={() => toggleSection("colors")}
            >
              Colors
              <span
                className={`small ms-2 ${
                  openSections.includes("colors") ? "rotate-arrow" : ""
                }`}
              >
                <img src={Image.down} alt="down" className="small-icon" />
              </span>
            </h6>
            {openSections.includes("colors") && (
              <div className="ps-2">
                <ul className="list-unstyled">
                  {colors.map((color, index) => (
                    <li key={index} className="mb-1">
                      <input type="checkbox" id={color} />{" "}
                      <label htmlFor={color}>{color}</label>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Products Section */}
        <div
          className={`col-lg-10 mt-3 ${isSidebarOpen ? "d-none d-lg-block" : ""}`}
        
        >
          <div className="row">
            {products.map((product, i) => (
              <div className="col-md-6 col-lg-3 col-xl-3 text-center" key={i}>
                <div className="product-card position-relative overflow-hidden rounded p-3">
                  <span className="new-badge position-absolute top-0 start-0 m-2">
                    NEW
                  </span>

                  {/* Product Image */}
                  <div className="product-img-container">
                   <img
                    src={selectedColors[i].image}
                    alt={product.title}
                    className="img-fluid product-img"
                    style={{ cursor: "pointer" }} // makes it look clickable
                    onClick={() =>
                      navigate("/productinfo", {
                        state: {
                          image: selectedColors[i].image,
                          title: product.title,
                          price: product.price,
                          color: selectedColors[i].name,
                          GSM: "220", // you can pass actual GSM if available
                          category: "Collared Neck",
                        },
                      })
                    }
                  />
                  </div>

                  {/* Product Details */}
                  <h5 className="mt-3 fw-bold">{product.title}</h5>
                  <p className="text-muted mb-1">${product.price.toFixed(2)}</p>
                  <p className="text-muted small">{product.fit}</p>
                  <p className="text-muted small">
                    {product.colors.length} Colours
                  </p>

                  {/* Color Selector */}
                  <div className="d-flex align-items-center justify-content-center mt-3">
                    <img
                      src={Image.left}
                      alt="left"
                      onClick={() => handlePrev(i)}
                      className="small-icon"
                    />
                    <div className="d-flex">
                      {product.colors
                        .slice(startIndexes[i], startIndexes[i] + visibleCount)
                        .map((color, index) => (
                          <button
                            key={index}
                            className={`color-circle ${
                              selectedColors[i].hex === color.hex
                                ? "active"
                                : ""
                            }`}
                            style={{ backgroundColor: color.hex }}
                            onMouseEnter={() => {
                              const updated = [...selectedColors];
                              updated[i] = color;
                              setSelectedColors(updated);
                            }}
                          ></button>
                        ))}
                    </div>
                    <img
                      src={Image.right}
                      alt="right"
                      onClick={() => handleNext(i, product)}
                      className="small-icon"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}