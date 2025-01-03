import React, { useState, useEffect } from "react";
import "../styles/Login.css";

import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { api } from "../config/app";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import Navbar from "../components/Navbar";
import Credentials from "../components/Credentials";
import "../styles/home.css";
const AdminLogin = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  const [transitionClass, setTransitionClass] = useState("");

  const settingCookies = (jwt_token: string) => {
    Cookies.set("adToken", jwt_token, { expires: 1 });
    navigate("/admin-dashboard");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setTransitionClass("right-to-left");
    }, 100);
    const token = Cookies.get("adToken");
    if (token) {
      navigate("/admin-dashboard");
    }
    return () => clearTimeout(timer);
  }, [navigate]);

  const loginFunc = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email || !password) {
      toast.warn("Please provide both email and password!");
      return;
    }

    try {
      const adminDetails = { email, password };
      const response = await api.post("/admin/admin/login", adminDetails);
      const data = response.data.result;
      console.log(data);
      settingCookies(data.token);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(
          "Axios error message:",
          error.response?.data.message || error.message
        );
        toast.error(error.response?.data.message);
      } else {
        console.error("Unexpected error:", error);
        toast.error("Something went wrong. Please try again later.");
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className={`admin-login-cont ${transitionClass}`}>
        <div className={`Doc-login-box`}>
          <h2>
            <span style={{ color: "#5f6fff" }}>Admin </span>Login
          </h2>

          <form onSubmit={loginFunc}>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
          <p
            style={{ marginLeft: "-8px", width: "170px" }}
            className="signup-text"
          >
            Doctor Login? <a href="/doctor-login">Click here</a>
          </p>
        </div>
      </div>
      <Credentials />
      <ToastContainer />
    </>
  );
};

export default AdminLogin;
