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
      { name: "Gray", image: Image.Fleece1, hex: "#808080" },
      { name: "Blue", image: Image.Fleece2, hex: "#003366" },
      { name: "Black", image: Image.Fleece3, hex: "#000000" },
      { name: "Light Gray", image: Image.Fleece4, hex: "#A9A9A9" },
      { name: "Red", image: Image.Fleece5, hex: "#B22222" },
      { name: "Dark Blue", image: Image.Fleece2, hex: "#001F54" },
      { name: "Charcoal", image: Image.Fleece1, hex: "#555555" },
      { name: "Navy", image: Image.Fleece2, hex: "#2F4F4F" },
      { name: "Maroon", image: Image.Fleece5, hex: "#800000" },
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
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-3 col-lg-2 border-end pe-4">
          <h5 className="fw-bold mb-3">Filters</h5>

          <div className="mb-3">
            <h6 className="fw-semibold">Category</h6>
            <ul className="list-unstyled">
              <li><input type="checkbox" /> Hoodies</li>
              <li><input type="checkbox" /> Crewnecks</li>
              <li><input type="checkbox" /> Jackets</li>
            </ul>
          </div>

        </div>

        {/* Product Section */}
        <div className="col-md-9 col-lg-10">
          <div className="row">
            <div className="col-md-3 col-lg-3 text-center">
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
                <p className="text-muted small">{product.colors.length} Colours</p>

                {/* Color Selector */}
                <div className="d-flex align-items-center justify-content-center mt-3">
                  <img src={Image.left} alt="left" onClick={handlePrev} className="small-icon" />
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
                  <img src={Image.right} alt="right" onClick={handleNext} className="small-icon" />
                </div>
              </div>
            </div>
             <div className="col-md-3 col-lg-3 text-center">
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
                <p className="text-muted small">{product.colors.length} Colours</p>

                {/* Color Selector */}
                <div className="d-flex align-items-center justify-content-center mt-3">
                  <img src={Image.left} alt="left" onClick={handlePrev} className="small-icon" />
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
                  <img src={Image.right} alt="right" onClick={handleNext} className="small-icon" />
                </div>
              </div>
            </div>
             <div className="col-md-3 col-lg-3 text-center">
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
                <p className="text-muted small">{product.colors.length} Colours</p>

                {/* Color Selector */}
                <div className="d-flex align-items-center justify-content-center mt-3">
                  <img src={Image.left} alt="left" onClick={handlePrev} className="small-icon" />
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
                  <img src={Image.right} alt="right" onClick={handleNext} className="small-icon" />
                </div>
              </div>
            </div>
             <div className="col-md-3 col-lg-3 text-center">
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
                <p className="text-muted small">{product.colors.length} Colours</p>

                {/* Color Selector */}
                <div className="d-flex align-items-center justify-content-center mt-3">
                  <img src={Image.left} alt="left" onClick={handlePrev} className="small-icon" />
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
                  <img src={Image.right} alt="right" onClick={handleNext} className="small-icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
}
