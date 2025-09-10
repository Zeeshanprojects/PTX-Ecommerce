import { useState, useEffect } from "react";
import "./Home.css";
import Image from "../Images/Image";

export default function Men() {
  useEffect(() => {
    document.title = "Men - PTX Ecommerce";
  }, []);

  // ✅ Multiple products (categories)
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
      title: "Fleece Crewneck",
    price: 10.0,
    fit: "Regular Fit",
    colors: [
      { image: Image.Fleece1, hex: "#CFCFCF" },
      { image: Image.Fleece2, hex: "#3A5E3B" },
      { image: Image.Fleece3, hex: "#737A83" },
      { image: Image.Fleece4, hex: "#BD8DB9" },
      { image: Image.Fleece5, hex: "#B7AF98" },
      { image: Image.Fleece6, hex: "#75736F" },
      { image: Image.Fleece7, hex: "#212121" },
      { image: Image.Fleece8, hex: "#9B73B2" },
      { image: Image.Fleece9, hex: "#6679AE" },
      { image: Image.Fleece10, hex: "#2D231D" },
      { image: Image.Fleece11, hex: "#2D3134" },
      { image: Image.Fleece12, hex: "#5374D0" },
      { image: Image.Fleece13, hex: "#5B636E" },
      { image: Image.Fleece14, hex: "#37095F" },
      { image: Image.Fleece15, hex: "#766753" },
      { image: Image.Fleece16, hex: "#BD9929" },
      { image: Image.Fleece17, hex: "#17271B" },
      { image: Image.Fleece18, hex: "#6341BC" },
  
    ],
    },
    {
      title: "Collared Neck",
      price: 10.0,
      fit: "Regular Fit",
      colors: [
        { image: Image.CollaredNeck3, hex: "#1A1C3A" },
        { image: Image.CollaredNeck5, hex: "#080706" },
          { image: Image.CollaredNeck8, hex: "#6F6940" },
      ],
    },
    {
      title: "Collared Neck",
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
    },
    {
      title: "Hoodies",
    price: 10.0,
    fit: "Regular Fit",
    colors: [
      { image: Image.Hoodie1, hex: "#DBD9D8" },
      { image: Image.Hoodie2, hex: "#2A452A" },
      { image: Image.Hoodie3, hex: "#7E7563" },
      { image: Image.Hoodie4, hex: "#CBA2D7" },
      { image: Image.Hoodie5, hex: "#ACA996" },
      { image: Image.Hoodie6, hex: "#766949" },
      { image: Image.Hoodie7, hex: "#1A1A1A" },
      { image: Image.Hoodie8, hex: "#79B1C2" },
      { image: Image.Hoodie9, hex: "#BBAEBB" },
      { image: Image.Hoodie10, hex: "#372718" },
      { image: Image.Hoodie11, hex: "#922020" },
    
      { image: Image.Hoodie12, hex: "#3E3E3E" },
      { image: Image.Hoodie13, hex: "#6FB5EF" },
      { image: Image.Hoodie14, hex: "#6A6661" },
      { image: Image.Hoodie15, hex: "#421C6E" },
      { image: Image.Hoodie16, hex: "#816855" },
      { image: Image.Hoodie17, hex: "#D6A426" },
      { image: Image.Hoodie18, hex: "#294233" },
    ],
    },
    {
 title: "Flannel Shirts",
    price: 10.0,
    fit: "Regular Fit",
    colors: [
      { image: Image.Shirt1, hex: "#6E1112" },
     
    ],
    },
    {
      title: "Puffers",
    price: 10.0,
    fit: "Regular Fit",
    colors: [
      { image: Image.Puffer2, hex: "#1E1D1B" },
     
    ],
    }
  
  ];

  // ✅ State for selected colors of each product
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

  // ✅ Sidebar filters
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
      <h1
        className="fw-bold m-0 category-heding mb-2 mb-md-0"
        data-aos="fade-up"
      >
MEN
      </h1>
      <p className="mb-4" data-aos="fade-up">
        OUR PREMIUM QUALITY COLLECTION
      </p>
      <div className="row mt-4">
        {/* Sidebar */}
        <div className="col-lg-2 border-end pe-4" data-aos="fade-up">
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
        <div className="col-lg-10 mt-3" data-aos="fade-up">
          <div className="row">
            {products.map((product, i) => (
              <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 text-center" key={i}>
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
      </div>{" "}
      {/* row end */}
    </div>
  );
}
