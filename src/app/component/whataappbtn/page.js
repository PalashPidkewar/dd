// WhatsAppButton.jsx
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "91789828437"; // Apna WhatsApp number (country code ke saath)
  const message = "Hello! I want to connect with you."; // Default message

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "15px",
        left: "20px",
        backgroundColor: "#25D366",
        color: "#fff",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
        fontSize: "30px",
        zIndex: 1000,
        textDecoration: "none",
        cursor: "pointer",
      }}
    >
      <FaWhatsapp />
    </a>
  );
};

export default WhatsAppButton;
