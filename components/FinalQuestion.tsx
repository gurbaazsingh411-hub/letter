import React, { useState } from 'react';
import styles from './FinalQuestion.module.css';

const FinalQuestion: React.FC = () => {
  const [choice, setChoice] = useState<string | null>(null);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <p className={styles.preamble}>
          I don’t know what this is yet…<br />
          a coincidence, a comfort, or the beginning of something brave.
        </p>
        <p className={styles.question}>
          Should I keep admiring you quietly…<br />
          or is it time I try standing a little closer to your heart?
        </p>
        {!choice ? (
          <div className={styles.buttonGroup}>
            <button
              className={styles.btn}
              onClick={() => setChoice('Beautiful Maybe')}
            >
              Stay in this beautiful maybe
            </button>
            <button
              className={`${styles.btn} ${styles.primaryBtn}`}
              onClick={() => setChoice('Let’s see')}
            >
              Let’s see where this goes
            </button>
          </div>
        ) : (
          <div className={styles.response}>
            <p>Thank you for being part of this universe.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FinalQuestion;
