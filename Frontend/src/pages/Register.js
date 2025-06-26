import React, { useState, useEffect } from "react";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Loder from "../components/Loder";
import "../styles/RegisterPage.css";
const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  //from submit
  const submitHandler = async (values) => {
    try {
      setLoading(true);
      await axios.post("/api/v1/users/register", values);
      message.success("Registeration Successfull");
      setLoading(false);
      navigate("/login");
    } catch (error) {
      setLoading(false);
      console.error("Registration failed:", error.response?.data || error.message);
      message.error(error.response?.data?.message || "Something went wrong with registration.");
    }
  };

  //prevent for login user
  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/");
    }
  }, [navigate]);
  return (
    <>
      <div className="register-page ">
        {loading && <Loder />}
        <Form
          className="register-form"
          layout="vertical"
          onFinish={submitHandler}
        >
          <h2>Register Form</h2>
          <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please input your name!' }]}> 
  <Input type="text" />
</Form.Item>
<Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please input your email!' }]}> 
  <Input type="email" />
</Form.Item>
<Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}> 
  <Input type="password" />
</Form.Item>
<div className="d-flex justify-content-between">
  <Link to="/login">Already Register? login here!</Link>
  <button type="submit" className="btn" disabled={loading}>Register</button>
</div>
        </Form>
      </div>
    </>
  );
};

export default Register;
