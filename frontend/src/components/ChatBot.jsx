import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../Router/api";
import VoiceInput from "./VoiceInput";

export default function ChatBot() {

  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const navigate = useNavigate();

  // 🔊 BOT SPEAK
  const speak = (text) => {
    const msg = new SpeechSynthesisUtterance();
    msg.text = text;
    msg.lang = "en-US";
    msg.pitch = 1;
    msg.rate = 1;
    window.speechSynthesis.speak(msg);
  };

  // 🎤 Voice message
  const sendMessageFromVoice = async (voiceText) => {
    setMessages(prev => [...prev, { sender: "user", text: voiceText }]);

    setIsTyping(true);

    const res = await api.post("/api/chat", {
      message: voiceText,
      userId: 1
    });

    const bot = res.data;

    setIsTyping(false);

    setMessages(prev => [...prev, { sender: "bot", text: bot.reply }]);
    speak(bot.reply);

    if (bot.navigateTo) navigate(bot.navigateTo);
  };

  // 💬 Keyboard message
  const sendMessage = async () => {
    if (!text.trim()) return;

    const userText = text;
    setText("");

    setMessages(prev => [...prev, { sender: "user", text: userText }]);

    setIsTyping(true);

    const res = await api.post("/api/chat", {
      message: userText,
      userId: 1
    });

    const bot = res.data;

    setIsTyping(false);

    setMessages(prev => [...prev, { sender: "bot", text: bot.reply }]);

    speak(bot.reply);

    if (bot.navigateTo) navigate(bot.navigateTo);
  };

  return (
    <div style={styles.container}>
      
      <h3 style={styles.header}>AI Assistant 🤖</h3>

      <div style={styles.chatBox}>
        {messages.map((m, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              alignSelf: m.sender === "user" ? "flex-end" : "flex-start",
            }}
          >
            {m.sender === "bot" && (
              <span style={{ fontSize: "24px" }}>🤖</span>
            )}

            <div
              style={{
                ...styles.message,
                background: m.sender === "user" ? "#4f46e5" : "#e5e7eb",
                color: m.sender === "user" ? "white" : "black",
              }}
            >
              {m.text}
            </div>
          </div>
        ))}

        {isTyping && (
          <div style={{ fontStyle: "italic", opacity: 0.7 }}>🤖 typing...</div>
        )}
      </div>

      <div style={styles.inputBar}>
        <input
          style={styles.input}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Ask something..."
        />
        <button style={styles.button} onClick={sendMessage}>
          Send
        </button>

        <VoiceInput onVoiceText={sendMessageFromVoice} />
      </div>

    </div>
  );
}

const styles = {
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    textAlign: "center",
    marginBottom: "10px",
    fontSize: "22px",
    fontWeight: "bold",
  },
  chatBox: {
    flex: 1,
    overflowY: "auto",
    border: "1px solid #ccc",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    borderRadius: "8px",
    background: "#fafafa",
  },
  message: {
    padding: "10px 15px",
    borderRadius: "18px",
    maxWidth: "75%",
  },
  inputBar: {
    marginTop: "10px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  input: {
    flex: 1,
    padding: "12px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "12px 18px",
    background: "#4f46e5",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};
