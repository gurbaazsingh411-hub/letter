import React, { useMemo } from 'react';
import styles from './FloatingHearts.module.css';

const HeartIcon = ({ size, opacity }: { size: number, opacity: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor"
    style={{ opacity }}
  >
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

const FloatingHearts: React.FC = () => {
  // Use useMemo to generate random properties only once on component mount (client-side)
  // Since this is a static site, we just need them to stay consistent for the animation
  const hearts = useMemo(() => [...Array(25)].map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 15}s`,
    size: Math.random() * 30 + 20,
    opacity: Math.random() * 0.5 + 0.5, // Much higher opacity
    duration: Math.random() * 12 + 8,
  })), []);

  return (
    <div className={styles.container}>
      {hearts.map((h) => (
        <div 
          key={h.id} 
          className={styles.heartStyle} 
          style={{ 
            left: h.left, 
            animationDelay: h.delay,
            animationDuration: `${h.duration}s`,
            color: '#ff6b6b' // More vibrant red/pink
          }}
        >
          <HeartIcon size={h.size} opacity={h.opacity} />
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;
