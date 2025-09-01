import React, { useEffect } from "react";
import "./Login.css"; // Use same styles as Contact.css or adjust slightly
import { Link } from "react-router-dom";
export default function Signup() {
  useEffect(()=>{
    document.title="Signup | Pakistan Textile Exchange"
  });
  return (
    <div className="login-wrapper py-5">
      <div className="container d-flex justify-content-center align-items-center">
        <div className="login-form card p-4 shadow" style={{ width: "100%", maxWidth: "400px" }}>
          <h2 className="text-center mb-4">CREATE ACCOUNT</h2>
          <form>
          <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="email" className="form-control" required />
            </div>
               <div className="mb-3">
              <label className="form-label">Phone</label>
              <input type="email" className="form-control" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" required />
            </div>
         
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Confirm Password</label>
              <input type="password" className="form-control" required />
            </div>
            <button type="submit" className="btn btn-dark w-100">Sign UP</button>
            <p className="text-center mt-3">
              Already have an account? <Link to="/Login">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
