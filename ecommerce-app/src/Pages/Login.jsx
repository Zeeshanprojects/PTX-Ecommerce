import React, { useEffect } from "react";
import "./Login.css"; // Use same styles as Contact.css or adjust slightly
import { Link } from "react-router-dom";
export default function Login() {
  useEffect(()=>{
    document.title="Signin | Pakistan Textile Exchange"
  });
  return (
    <div className="login-wrapper py-5">
      <div className="container d-flex justify-content-center align-items-center">
        <div className="login-form card p-4 shadow" style={{ width: "100%", maxWidth: "400px" }}>
          <h2 className="text-center mb-4">LOGIN</h2>
          <form>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" required />
            </div>
            <button type="submit" className="btn btn-dark w-100">Login</button>
            <p className="text-center mt-3">
              Don’t have an account? <Link to="/Signup">Register</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
