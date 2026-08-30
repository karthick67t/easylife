import { useState } from 'react';

export const useVoiceInput = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [hasWebSpeech] = useState(() => {
    return 'webkitSpeechRecognition' in window || 'SpeechRecognition' in window;
  });

  const startListening = (onResultCallback?: (text: string) => void) => {
    setIsListening(true);
    setTranscript('');

    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (SpeechRecognition) {
      try {
        const recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = true;

        recognition.onresult = (event: any) => {
          const current = event.resultIndex;
          const resultText = event.results[current][0].transcript;
          setTranscript(resultText);
          if (onResultCallback) onResultCallback(resultText);
        };

        recognition.onend = () => {
          setIsListening(false);
        };

        recognition.onerror = () => {
          setIsListening(false);
          // Fallback sample text for demo
          const fallback = "I need to see a doctor";
          setTranscript(fallback);
          if (onResultCallback) onResultCallback(fallback);
        };

        recognition.start();
        return;
      } catch (e) {
        console.error(e);
      }
    }

    // Simulated fallback for hackathon demonstration if SpeechRecognition fails or isn't granted permission
    setTimeout(() => {
      const simulatedSpeech = "I need to see a doctor";
      setTranscript(simulatedSpeech);
      setIsListening(false);
      if (onResultCallback) onResultCallback(simulatedSpeech);
    }, 1800);
  };

  const stopListening = () => {
    setIsListening(false);
  };

  return {
    isListening,
    transcript,
    hasWebSpeech,
    startListening,
    stopListening,
    setTranscript,
  };
};
