import React from "react";
import { useNavigate } from "react-router-dom";

export default function FloatingChatButton() {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/chat")}
      style={{
        position: "fixed",
        bottom: "25px",
        right: "25px",
        background: "#4f46e5",
        width: "65px",
        height: "65px",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontSize: "30px",
        cursor: "pointer",
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
        zIndex: 9999,
      }}
    >
      🤖
    </div>
  );
}
