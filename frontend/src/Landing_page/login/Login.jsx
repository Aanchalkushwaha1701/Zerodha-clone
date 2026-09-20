import React, { useState } from "react";
import axios from "axios";
function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://zerodha-backend-tlp2.onrender.com/login",
        formData,
        {
          withCredentials: true,
        },
      );

      console.log(response.data);

      if (response.data.success) {
        alert("Login successful!");

        // Dashboard par redirect
        window.location.href = "http://localhost:5175/";
      }
    } catch (error) {
      console.log(error);

      alert(error.response?.data?.message || "Login failed!");
    }
  };
  return (
    <div className="container mb-5 p-5">
      <h1  className="mb-5"
        style={{
          textAlign: "center",
          color: "blue",
        }}>Login Here</h1>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <input className="p-2 mb-5"
            style={{ width: "520px", margin: "auto" }}
            type="text"
            placeholder="Enter Email id"
            onChange={handleChange}
            value={formData.email}
            name="email"
          ></input>
        </div>
        <div className="row">
          <input
          className="p-2 mb-5"
            style={{ width: "520px", margin: "auto" }}
            type="password"
            placeholder="Enter Passsword"
            onChange={handleChange}
            value={formData.password}
            name="password"
          ></input>
        </div>
        <button
          className="mb-5 btn btn-primary "
          style={{ marginLeft: "800px", color: "white" }}
        >
          Submit
        </button>
      
      </form>
    </div>
  );
}
export default Login;
