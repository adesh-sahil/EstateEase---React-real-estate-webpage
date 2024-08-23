import React, { useState } from "react";
import "./register.scss";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import apiRequest from "../../lib/apiRequest";

function Register() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.target);

    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const res = await apiRequest.post("/auth/register", {
        username,
        email,
        password,
      });
      navigate("/login");
    } catch (error) {
      console.log(error);
      setError(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="register-page">
      <div className="row">
        <div className="register-left">
          <h1>Join <span>Estate Ease</span> Today!</h1>
          <p>
            Create your account and unlock a world of real estate possibilities.
            Discover your dream property with us.
          </p>

          <ul>
            <li>Access exclusive property listings.</li>
            <li>Save your favorite properties for later.</li>
            <li>Get personalized property recommendations.</li>
            <li>Receive instant alerts for new properties.</li>
          </ul>

          <div className="testimonial">
            <p>
              “Estate Ease made finding my dream home so simple and stress-free.
              Highly recommend!”
            </p>
            <span>— John M.</span>
          </div>

          <p className="cta">
            Already have an account? <Link to="/login">Log in here</Link>.
          </p>
        </div>

        <div className="container">
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <h2>Create an Account</h2>
              <div className="input-box">
                <input type="text" id="name" name="username" required />
                <span>Username</span>
              </div>

              <div className="input-box">
                <input type="email" id="email" name="email" required />
                <span>Email</span>
              </div>

              <div className="input-box">
                <input type="password" id="password" name="password" required />
                <span>Password</span>
              </div>

              <button disabled={isLoading} type="submit">
                Get Started
              </button>
              {error && <span>{error}</span>}
            </form>
            <p className="login-link">
              Already a user? <Link to="/login">LOGIN HERE</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
