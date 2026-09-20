import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Signup() {

  const [formData, setFormData] = useState({
    username: "",
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
      "https://zerodha-backend-tlp2.onrender.com/signup",
      formData,
      {
        withCredentials: true,
      }
    );

    console.log(response.data);

    if (response.data.success) {
      alert("Signup successful!");
         window.location.href = "https://zerodha-dashboard-86nk.onrender.com";
    } else {
      alert(response.data.message);
    }

  } catch (error) {
    console.log("ERROR:", error);
    console.log("STATUS:", error.response?.status);
    console.log("DATA:", error.response?.data);

    alert(error.response?.data?.message || "Signup failed!");
  }
};
  return (
    <div className="container mt-5 p-5">
      <h1 className="mb-5" style={{ textAlign: "center", color: "blue" }}>
        Signup Here
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="row mb-5 ">
          <input
            className="p-2"
            style={{ width: "520px", margin: "auto" }}
            type="text"
            placeholder="Enter your Name"
            value={formData.username}
            onChange={handleChange}
            name="username"
          ></input>
        </div>
        <div className="row mb-5">
          <input
            className="p-2"
            style={{ width: "520px", margin: "auto" }}
            type="text"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your Email id"
            name="email"
          ></input>
        </div>
        <div className="row mb-5">
          <input
            className="p-2"
            style={{ width: "520px", margin: "auto" }}
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter Password"
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

export default Signup;
