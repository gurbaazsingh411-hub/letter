import React, { useEffect, useState } from 'react';

interface TypingTextProps {
  text: string;
  speed?: number; // ms per character
  className?: string;
}

const TypingText: React.FC<TypingTextProps> = ({ text, speed = 50, className }) => {
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    setDisplayed('');
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayed(text.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return <h1 className={className}>{displayed}</h1>;
};

export default TypingText;
