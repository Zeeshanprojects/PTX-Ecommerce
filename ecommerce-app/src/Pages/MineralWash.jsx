import { useState, useEffect } from "react";
import "./Home.css";
import Image from "../Images/Image";

export default function Mineralwash() {
  useEffect(() => {
    document.title = "Mineral Wash - PTX Ecommerce";
  }, []);

  const product = {
    title: "Mineral Wash",
    price: 10.0,
    fit: "Regular Fit",
    colors: [
      { image: Image.Mineralwash1, hex: "#4F8674" },
      { image: Image.Mineralwash2, hex: "#D7CC7A" },
      { image: Image.Mineralwash3, hex: "#C94C58" },
      { image: Image.Mineralwash4, hex: "#4A5178" },
      { image: Image.Mineralwash5, hex: "#020101ff" },
      { image: Image.Mineralwash6, hex: "#A9A390" },
      { image: Image.Mineralwash7, hex: "#71747A" },
      { image: Image.Mineralwash8, hex: "#739AD1" },
      { image: Image.Mineralwash9, hex: "#C286B6" },
      { image: Image.Mineralwash10, hex: "#979797" },
      { image: Image.Mineralwash11, hex: "#52886F" },
      { image: Image.Mineralwash12, hex: "#232323" },
      { image: Image.Mineralwash13, hex: "#DA8CD5" },
      { image: Image.Mineralwash14, hex: "#931414" },
      { image: Image.Mineralwash15, hex: "#4F6AA7" },
      { image: Image.Mineralwash16, hex: "#DEC30B" },
      { image: Image.Mineralwash17, hex: "#7E6D53" },
       { image: Image.Mineralwash18, hex: "#A08337" },
      
    ],
  };

  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [startIndex, setStartIndex] = useState(0);

  // multiple accordions open by default
  const [openSections, setOpenSections] = useState([
    "productType",
    "size",
    "fit",
    "colors",
  ]);

  const visibleCount = 5; // or 8, or any number you want

  const handleNext = () => {
    if (startIndex + visibleCount < product.colors.length) {
      setStartIndex(startIndex + visibleCount);
    }
  };

  const handlePrev = () => {
    if (startIndex - visibleCount >= 0) {
      setStartIndex(startIndex - visibleCount);
    }
  };

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
      <h1
        className="fw-bold m-0 category-heding mb-2 mb-md-0"
        data-aos="fade-up"
      >
        MINERAL WASH
      </h1>
      <p className="mb-4" data-aos="fade-up">
        OUR PREMIUM QUALITY COLLECTION
      </p>
      <div className="row mt-4">
        {/* Sidebar */}
        <div className="col-lg-2 border-end pe-4" data-aos="fade-up">
          {/* Accordion Section - Product Type */}
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

          {/* Accordion Section - Size */}
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

          {/* Accordion Section - Fit */}
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

          {/* Accordion Section - Colors */}
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

        {/* Product Section */}
        <div className="col-lg-10 mt-3" data-aos="fade-up">
          <div className="row">
            <div className="col-md-6 col-lg-4 text-center">
              <div className="product-card position-relative overflow-hidden rounded p-3">
                <span className="new-badge position-absolute top-0 start-0 m-2">
                  NEW
                </span>

                {/* Product Image */}
                <div className="product-img-container">
                  <img
                    src={selectedColor.image}
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
                    onClick={handlePrev}
                    className="small-icon"
                  />
                  <div className="d-flex">
                    {product.colors
                      .slice(startIndex, startIndex + visibleCount)
                      .map((color, index) => (
                        <button
                          key={index}
                          className={`color-circle ${
                            selectedColor.name === color.name ? "active" : ""
                          }`}
                          style={{ backgroundColor: color.hex }}
                          onMouseEnter={() => setSelectedColor(color)}
                          title={color.name}
                        ></button>
                      ))}
                  </div>
                  <img
                    src={Image.right}
                    alt="right"
                    onClick={handleNext}
                    className="small-icon"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* row end */}
    </div>
  );
}
