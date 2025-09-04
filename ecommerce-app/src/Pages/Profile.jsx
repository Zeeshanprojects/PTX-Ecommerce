import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "../Images/Image"; // your image file

export default function Profile() {
  // Example state for form data
  const [formData, setFormData] = useState({
    name: "Zeeshan Ali",
    email: "zeeshan.ali@paktex.com",
    phone: "0312-1234567",
    profilePic: Image.zeeshanpic,
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "profilePic" && files.length > 0) {
      setFormData({
        ...formData,
        profilePic: URL.createObjectURL(files[0]),
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profile updated successfully!");
    // Later you can call API here to save data in backend
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-10 col-lg-8 col-xl-6">
          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-body p-4">
              <h3 className="text-center mb-4 fw-bold text-dark">
                Edit Profile
              </h3>
              <div className="text-center mb-4">
                <img
                  src={formData.profilePic}
                  alt="Profile"
                  className="rounded-circle"
                  width="120"
                  height="120"
                />
              </div>

              <form onSubmit={handleSubmit}>
                {/* Upload Picture */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">Profile Picture</label>
                  <input
                    type="file"
                    name="profilePic"
                    accept="image/*"
                    className="form-control"
                    onChange={handleChange}
                  />
                </div>

                {/* Name */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                {/* Email (read-only in edit mode) */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={formData.email}
                    readOnly
                  />
                </div>

                {/* Phone Number */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">Phone Number</label>
                  <input
                    type="text"
                    className="form-control"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                {/* Buttons */}
                <div className="d-flex justify-content-between">
                  <button
                    type="submit"
                    className="btn btn-dark w-50 me-2 rounded-pill"
                  >
                    Save Changes
                  </button>
                  <button
                    type="reset"
                    className="btn btn-outline-secondary w-50 rounded-pill"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
