import React, { useState } from 'react';
import styles from './Envelope.module.css';

interface EnvelopeProps {
  onOpen: () => void;
}

const Envelope: React.FC<EnvelopeProps> = ({ onOpen }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    // Delay the actual state change in the parent to allow animation to play
    setTimeout(() => {
      onOpen();
    }, 1500);
  };

  return (
    <div className={`${styles.container} ${isOpen ? styles.opening : ''}`}>
      <div className={styles.envelope} onClick={handleOpen}>
        <div className={styles.flap}></div>
        <div className={styles.body}></div>
        <div className={styles.seal}>
          <svg viewBox="0 0 100 100" className={styles.waxSeal}>
            <path 
              d="M50 88.9L42.5 82C16.9 58.8 0 43.5 0 24.8C0 9.6 12 0 27.2 0C35.8 0 44.1 4 50 10.3C55.9 4 64.2 0 72.8 0C88 0 100 9.6 100 24.8C100 43.5 83.1 58.8 57.5 82L50 88.9Z" 
              fill="#c0392b"
            />
          </svg>
        </div>
        <div className={styles.shadow}></div>
        <p className={styles.tapPrompt}>touch to open</p>
      </div>
    </div>
  );
};

export default Envelope;
