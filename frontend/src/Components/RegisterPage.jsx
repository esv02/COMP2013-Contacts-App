import ContactForm from "./ContactForm";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  //States
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [postResponse, setPostResponse] = useState("");
  
  //Navigate
  const navigate = useNavigate();

  //Handlers
  const handleOnChange = (e) => {
    setFormData((prevData) => {
      return { ...prevData, [e.target.name]: e.target.value };
    });
  };

  const handleRegister = async () => {
    try {
      const response = await axios.post("http://localhost:3000/register", {
        ...formData,
      });
      setPostResponse(response.data.message);
      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (error) {
      setPostResponse(error.response.data.message || "Cannot add username");
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    handleRegister();
    setFormData({ username: "", password: "" });
  };

  return (
    <div>
      <h1>Register</h1>
      <ContactForm
        formData={formData}
        postResponse={postResponse}
        handleOnChange={handleOnChange}
        handleOnSubmit={handleOnSubmit}
        currentPage="register"
        nextPage=""
      />
      <button onClick={() => navigate("/")}>Login</button>
    </div>
  );
}
