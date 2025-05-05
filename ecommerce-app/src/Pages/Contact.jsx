import React from "react";
import "./Contact.css"; // Make sure to create and link this

export default function Contact() {
  return (
    <div className="contact-wrapper d-flex justify-content-center align-items-center">
      <div className="contact-form card p-4 shadow-lg" style={{ width: "100%", maxWidth: "500px" }}>
        <h2 className="text-center mb-4">CONTACT US</h2>
        <form>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Phone Number</label>
            <input type="tel" className="form-control" required />
          </div>
          <div className="mb-3">
            <label className="form-label">What's on your mind?</label>
            <textarea className="form-control" rows="4" required></textarea>
          </div>
          <button type="submit" className="btn btn-dark w-100">Submit</button>
        </form>
      </div>
    </div>
  );
}
