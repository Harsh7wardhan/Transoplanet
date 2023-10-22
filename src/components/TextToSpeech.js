import React from 'react';

function TextToSpeech({ text }) {
  const speakText = () => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div>
      <button onClick={speakText}>Speak</button>
    </div>
  );
}

export default TextToSpeech;
