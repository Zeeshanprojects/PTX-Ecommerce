import React, { useEffect } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

export default function Login() {
  useEffect(() => {
    document.title = "Signin | Pakistan Textile Exchange";
  }, []);

  return (
    <div className="login-wrapper py-5">
      <div className="container d-flex justify-content-center align-items-center">
        
        <div
          className="login-form p-4 shadow"
          style={{ width: "100%", maxWidth: "400px" }}
        >
          <h2 className="text-center mb-4">SIGN IN</h2>
          <form>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" required />
            </div>
            <button type="submit" className="btn btn-dark w-100">
              LOGIN
            </button>

            {/* Divider */}
            <div className="text-center my-3">OR</div>

            {/* Google Login Button */}
            <button type="button" className="btn btn-outline-dark w-100 mb-2">
              <i className="bi bi-google me-2"></i> Login with Google
            </button>

            <p className="text-center mt-3">
              Don’t have an account? <Link to="/Signup">Register</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
