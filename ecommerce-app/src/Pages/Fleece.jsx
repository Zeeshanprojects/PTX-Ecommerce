import { useState, useEffect } from "react";
import "./Home.css";
import Image from "../Images/Image";

export default function Fleece() {
  useEffect(() => {
    document.title = "Fleece - PTX Ecommerce";
  }, []);

  const product = {
    title: "Fleece Crewneck",
    price: 10.0,
    fit: "Regular Fit",
    colors: [
      { name: "White", image: Image.Fleece1, hex: "#CECECE" },
      { name: "Green", image: Image.Fleece2, hex: "#3C5F3C" },
      { name: "Black", image: Image.Fleece3, hex: "#747C84" },
      { name: "Light Gray", image: Image.Fleece4, hex: "#BE90BB" },
      { name: "Red", image: Image.Fleece5, hex: "#BBB39F" },
      { name: "Dark Blue", image: Image.Fleece6, hex: "#706F6B" },
      { name: "Charcoal", image: Image.Fleece7, hex: "#1F1F1F" },
      { name: "Navy", image: Image.Fleece8, hex: "#9B73B2" },
      { name: "Maroon", image: Image.Fleece9, hex: "#5E70A7" },
      { name: "Gray", image: Image.Fleece10, hex: "#2E241E" },
      { name: "Blue", image: Image.Fleece11, hex: "#2B2F33" },
      { name: "Black", image: Image.Fleece12, hex: "#5A79D3" },
      { name: "Light Gray", image: Image.Fleece13, hex: "#585F6B" },
      { name: "Red", image: Image.Fleece14, hex: "#3A0862" },
      { name: "Dark Blue", image: Image.Fleece15, hex: "#6F5F4E" },
      { name: "Charcoal", image: Image.Fleece16, hex: "#C09C2B" },
      { name: "Navy", image: Image.Fleece17, hex: "#152418" },
      { name: "Maroon", image: Image.Fleece18, hex: "#613FBC" },
    ],
  };

  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 5;

  const handleNext = () => {
    if (startIndex + visibleCount < product.colors.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div className="container-fluid py-5">

       <h1 className="fw-bold m-0 category-heding mb-2 mb-md-0  ">
             FLEECE CREWNECK
            </h1>

           
        
          <p className="mb-4" data-aos="fade-up">
            OUR PREMIUM QUALITY COLLECTION
          </p>
      <div className="row mt-5">
        {/* Sidebar */}
        <div className="col-md-3 col-lg-2 border-end pe-4">
          <h5 className="fw-bold mb-3">Filters</h5>

          <div className="mb-3">
            <h6 className="fw-semibold">Category</h6>
            <ul className="list-unstyled">
              <li>
                <input type="checkbox" /> Hoodies
              </li>
              <li>
                <input type="checkbox" /> Crewnecks
              </li>
              <li>
                <input type="checkbox" /> Jackets
              </li>
            </ul>
          </div>
        </div>

        {/* Product Section */}
        <div className="col-md-9 col-lg-10">
          <div className="row">
            <div className="col-md-4 col-lg-4 text-center">
              <div className="product-card position-relative overflow-hidden rounded p-3">
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
                          onClick={() => setSelectedColor(color)}
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
      </div>
    </div>
  );
}
