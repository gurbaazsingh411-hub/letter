import React, { useState, useEffect } from 'react';
import styles from './PoetryRoom.module.css';

interface PoetryRoomProps {
  lines: string[];
}

const PoetryRoom: React.FC<PoetryRoomProps> = ({ lines }) => {
  const [visibleLines, setVisibleLines] = useState<number>(0);

  useEffect(() => {
    if (visibleLines >= lines.length) return;

    const interval = setInterval(() => {
      setVisibleLines(prev => prev + 1);
    }, 1800); // Faster reveal speed

    return () => clearInterval(interval);
  }, [visibleLines, lines.length]);

  return (
    <div className={styles.container}>
      <div className={styles.poemWrapper}>
        {lines.map((line, index) => {
          const isActive = index === visibleLines - 1;
          const isPast = index < visibleLines - 1;
          const isVisible = index < visibleLines;

          return (
            <p
              key={index}
              className={`
                ${styles.line} 
                ${isVisible ? styles.visible : ''} 
                ${isActive ? styles.active : ''} 
                ${isPast ? styles.past : ''}
              `}
            >
              {line === "" ? "\u00A0" : line}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default PoetryRoom;
