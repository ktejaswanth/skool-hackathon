import React from "react";

export default function VoiceInput({ onVoiceText }) {

  const startListening = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Your browser does not support Voice Recognition");
      return;
    }

    const mic = new SpeechRecognition();
    mic.continuous = false;
    mic.interimResults = false;
    mic.lang = "en-US";

    mic.start();

    mic.onresult = (event) => {
      const voiceText = event.results[0][0].transcript;
      onVoiceText(voiceText);
    };
  };

  return (
    <button
      onClick={startListening}
      style={{
        padding: "10px 14px",
        background: "#4f46e5",
        color: "white",
        borderRadius: "50%",
        cursor: "pointer",
        border: "none",
        fontSize: "20px",
      }}
    >
      🎤
    </button>
  );
}
