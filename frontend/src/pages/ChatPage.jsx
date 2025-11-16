import ChatBot from "../components/ChatBot";
import { useNavigate } from "react-router-dom";

export default function ChatPage() {
  const navigate = useNavigate();

  return (
    <div style={styles.overlay}>
      <div style={styles.panel}>

        {/* BACK BUTTON */}
        <button style={styles.backBtn} onClick={() => navigate(-1)}>
          ⬅ Back
        </button>

        <ChatBot />
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    background: "rgba(0,0,0,0.4)",
    display: "flex",
    justifyContent: "flex-end",
    zIndex: 10000,
  },
  panel: {
    width: "380px",
    height: "100%",
    background: "white",
    boxShadow: "-4px 0px 12px rgba(0,0,0,0.2)",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
  },
  backBtn: {
    padding: "8px 12px",
    background: "#4f46e5",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    marginBottom: "10px",
    fontSize: "16px",
  }
};
