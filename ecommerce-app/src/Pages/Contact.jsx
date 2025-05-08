import React from "react";
import "./Contact.css"; // Make sure this file exists

export default function Contact() {
  return (
    <div className="contact-wrapper py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Contact Form Column */}
          <div className="col-md-12 mb-4 ">
            <div className="contact-form card p-4 shadow h-100">
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

          {/* Map Column
          <div className="col-md-6">
            <div className="map-container shadow rounded h-100">
              <iframe
                title="California Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.2742656182!2d-118.69192008882315!3d34.02073048637868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c0b2f24f4f0b%3A0x7c3e9b1b4e82c780!2sCalifornia%2C%20USA!5e0!3m2!1sen!2s!4v1616105872091!5m2!1sen!2s"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
