import React, { useState, useEffect } from "react";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Loder from "../components/Loder";
import "../styles/Loginpage.css";
const Login = () => {
  
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  
  const submitHandler = async (values) => {
    try {
      setLoading(true);
      const { data } = await axios.post("/api/v1/users/login", values);
      setLoading(false);
      message.success("login success");
      localStorage.setItem(
        "user",
        JSON.stringify({ ...data.user, password: "" })
      );
      navigate("/");
    } catch (error) {
      setLoading(false);
      console.error("Login failed:", error.response?.data || error.message);
      message.error(error.response?.data?.message || "Something went wrong with login.");
    }
  };
  
  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/");
    }
  }, [navigate]);
  return (
    <>
      <div className="login-page" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        {loading && <Loder />}
        <div className="login-container" style={{ width: '400px', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', backgroundColor: '#fff' }}>
          <h1 style={{ textAlign: 'center' }}>Expense Tracker</h1>
          <Form layout="vertical" onFinish={submitHandler}>
            <h1 style={{ textAlign: 'center' }}>Login Form</h1>

            <Form.Item label="Email" name="email">
              <Input type="email" required />
            </Form.Item>
            <Form.Item label="Password" name="password">
              <Input type="password" required />
            </Form.Item>
            <div className="d-flex justify-content-between">
              <Link to="/register">
                Not a user ? Click Here to regsiter !
              </Link>
              <button className="btn" style={{ backgroundColor: "#b87333", color: "#fff" }}>Login</button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Login;
