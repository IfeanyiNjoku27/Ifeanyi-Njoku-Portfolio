//Imports
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Pages_CSS/Contact.css"
import toast from "react-hot-toast";

export default function ContactMe() {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation
    if(!inputs.email || !inputs.message) {
      toast.error("Please fill in all required fields.");
      return;
    }

    // Loading toast
    const loadingToast = toast.loading("Sending message...");

    //replacing with web3forms fetch
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "95a8de7a-4e8c-4cab-90cd-81b75975626a",
          name: `${inputs.firstname} ${inputs.lastname}`,
          email: inputs.email,
          message: inputs.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast.dismiss(loadingToast);
        toast.success("Message Sent! I'll get back to you soon.")
        navigate("/");
      } else {
        throw new Error("Submission Failed");
      }
      
    } catch (error) {
      toast.dismiss(loadingToast);
      console.error("Error sending message: ", error);
      toast.error("Failed to send message.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <label>
        First Name:
        <input
          type="text"
          name="firstname"
          value={inputs.firstname}
          onChange={handleChange}
          className="form-input"
        />
      </label>

      <label>
        Last Name:
        <input
          type="text"
          name="lastname"
          value={inputs.lastname}
          onChange={handleChange}
          className="form-input"
        />
      </label>

      <label>
        Email Address: 
        <input 
            type="email"
            name="email"
            value={inputs.emailAddress}
            onChange={handleChange}
            className="form-input"
        />
      </label>

      <label>
        Message: 
        <textarea 
            name="message"
            value={inputs.message}
            onChange={handleChange}
            className="form-textarea"
        ></textarea>
      </label>

      <button type="submit" className="form-submit-btn">
        Send Message
        </button>
    </form>
  );
}
