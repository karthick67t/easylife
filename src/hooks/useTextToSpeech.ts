import { useState, useEffect } from 'react';

export const useTextToSpeech = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isSupported, setIsSupported] = useState(true);

  useEffect(() => {
    if (!('speechSynthesis' in window)) {
      setIsSupported(false);
    }
  }, []);

  const speak = (text: string, lang: string = 'en-US') => {
    if (!('speechSynthesis' in window)) {
      alert("Read Aloud: " + text);
      return;
    }

    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9; // Slightly slower for elderly clarity
    utterance.pitch = 1.0;
    
    // Choose appropriate language code if Tamil/Hindi
    if (lang === 'Tamil') utterance.lang = 'ta-IN';
    else if (lang === 'Hindi') utterance.lang = 'hi-IN';
    else if (lang === 'Telugu') utterance.lang = 'te-IN';
    else if (lang === 'Malayalam') utterance.lang = 'ml-IN';
    else utterance.lang = 'en-US';

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
  };

  const stop = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsSpeaking(false);
  };

  return {
    isSpeaking,
    isSupported,
    speak,
    stop,
  };
};
