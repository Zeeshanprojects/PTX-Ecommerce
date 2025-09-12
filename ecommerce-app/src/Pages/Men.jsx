import { useState, useEffect } from "react";
import "./Home.css";
import Image from "../Images/Image";

export default function Men() {
  useEffect(() => {
    document.title = "Men - PTX Ecommerce";
  }, []);

  // State for sidebar visibility on small screens
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Multiple products (categories)
  const products = [
    {
      title: "Collared Neck",
      price: 10.0,
      fit: "Regular Fit",
      colors: [
        { image: Image.CollaredNeck1, hex: "#101012" },
        { image: Image.CollaredNeck2, hex: "#070709" },
      ],
    },
    {
      title: "Fleece",
      price: 10.0,
      fit: "Regular Fit",
      colors: [
        { image: Image.CollaredNeck3, hex: "#1A1C3A" },
        { image: Image.CollaredNeck5, hex: "#080706" },
        { image: Image.CollaredNeck8, hex: "#6F6940" },
      ],
    },
    
    {
      title: "Mineral Wash",
      price: 10.0,
      fit: "Slim Fit",
      colors: [
        { image: Image.CollaredNeck4, hex: "#E20F22" },
        { image: Image.CollaredNeck6, hex: "#776A3A" },
      ],
    },
      {
      title: "Mineral Wash",
      price: 10.0,
      fit: "Regular Fit",
      colors: [
        { image: Image.Mineralwash1, hex: "#6EB49C" },
        { image: Image.Mineralwash2, hex: "#D4CA79" },
        { image: Image.Mineralwash3, hex: "#D7505E" },
        { image: Image.Mineralwash4, hex: "#6A73A0" },
        { image: Image.Mineralwash5, hex: "#151419" },
        { image: Image.Mineralwash6, hex: "#9E937F" },
        { image: Image.Mineralwash7, hex: "#76787C" },
        { image: Image.Mineralwash8, hex: "#668ECA" },
        { image: Image.Mineralwash9, hex: "#6B604F" },
        { image: Image.Mineralwash10, hex: "#AEAEAE" },
        { image: Image.Mineralwash11, hex: "#528B71" },
        { image: Image.Mineralwash12, hex: "#242424" },
        { image: Image.Mineralwash13, hex: "#DD95DD" },
        { image: Image.Mineralwash14, hex: "#8C100D" },
        { image: Image.Mineralwash15, hex: "#516CA7" },
        { image: Image.Mineralwash16, hex: "#E7CD10" },
        { image: Image.Mineralwash17, hex: "#7F6D53" },
        { image: Image.Mineralwash18, hex: "#9F8237" },
      ],
    },
     {
      title: "Sandow",
      price: 10.0,
      fit: "Regular Fit",
      colors: [{ image: Image.Sandow1, hex: "#DDD9D6" }],
    },
    {
      title: "Fleece",
      price: 10.0,
      fit: "Regular Fit",
      colors: [
        { image: Image.Fleece1, hex: "#CBCBCB" },
        { image: Image.Fleece2, hex: "#3D603D" },
        { image: Image.Fleece3, hex: "#777F88" },
        { image: Image.Fleece4, hex: "#BF92BA" },
        { image: Image.Fleece5, hex: "#B5AE97" },
        { image: Image.Fleece6, hex: "#787773" },
        { image: Image.Fleece7, hex: "#1F1F1F" },
        { image: Image.Fleece8, hex: "#9B73B2" },
        { image: Image.Fleece9, hex: "#6B7CAF" },
        { image: Image.Fleece10, hex: "#2C211E" },
        { image: Image.Fleece11, hex: "#2B2F33" },
        { image: Image.Fleece12, hex: "#5978D2" },
        { image: Image.Fleece13, hex: "#5B636E" },
        { image: Image.Fleece14, hex: "#3A0962" },
        { image: Image.Fleece15, hex: "#716250" },
        { image: Image.Fleece16, hex: "#C7A22C" },
        { image: Image.Fleece17, hex: "#162519" },
        { image: Image.Fleece18, hex: "#6745C0" },
      ],
    },
     {
      title: "Short",
      price: 10.0,
      fit: "Regular Fit",
      colors: [
        { image: Image.Short1, hex: "#DDD9D6" },
      
      ],
    },
   
      {
      title: "Flannel Shirts",
      price: 10.0,
      fit: "Regular Fit",
      colors: [{ image: Image.Shirt1, hex: "#4A0B0C" }],
    },
       {
      title: "Hoodies",
      price: 10.0,
      fit: "Regular Fit",
      colors: [
        { image: Image.Hoodie1, hex: "#DAD8D6" },
        { image: Image.Hoodie2, hex: "#2A452A" },
        { image: Image.Hoodie3, hex: "#7B7361" },
        { image: Image.Hoodie4, hex: "#D0ACDB" },
        { image: Image.Hoodie5, hex: "#B2AF9B" },
        { image: Image.Hoodie6, hex: "#ADA995" },
        { image: Image.Hoodie7, hex: "#1B1B1B" },
        { image: Image.Hoodie8, hex: "#A6CDD7" },
        { image: Image.Hoodie9, hex: "#BBAEBB" },
        { image: Image.Hoodie10, hex: "#362617" },
        { image: Image.Hoodie11, hex: "#932221" },
        { image: Image.Hoodie12, hex: "#404040" },
        { image: Image.Hoodie13, hex: "#76B9F0" },
        { image: Image.Hoodie14, hex: "#706D67" },
        { image: Image.Hoodie15, hex: "#411B6C" },
        { image: Image.Hoodie16, hex: "#846C59" },
        { image: Image.Hoodie17, hex: "#DAA931" },
        { image: Image.Hoodie18, hex: "#2A4430" },
      ],
    },
    {
      title: "BoatNeck",
      price: 10.0,
      fit: "Regular Fit",
      colors: [
        { image: Image.Boatneck1, hex: "#B3ADA8" },
      
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
       MEN
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