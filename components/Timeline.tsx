import React, { useState, useEffect } from 'react';
import styles from './Timeline.module.css';

interface Milestone {
  id: number;
  label: string;
  description: string;
  x: string; // position in %
  y: string; // position in %
}

const milestones: Milestone[] = [
  {
    id: 1,
    label: 'Months apart',
    description: 'The day we talked again after months of silence. It felt like a clock finally started ticking again.',
    x: '20%',
    y: '30%',
  },
  {
    id: 2,
    label: 'The Mentor Joke',
    description: 'When you joked about the mentor being yours. I laughed, but my heart skipped a beat.',
    x: '50%',
    y: '60%',
  },
  {
    id: 3,
    label: 'The K-Pop Pretence',
    description: 'The day I pretended to like K-pop just to keep the conversation going. I still don\'t know the lyrics, but I know the feeling.',
    x: '80%',
    y: '40%',
  },
];

const Timeline: React.FC = () => {
  const [activeMilestone, setActiveMilestone] = useState<Milestone | null>(null);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setActiveMilestone(milestones[index]);
      index = (index + 1) % milestones.length;
    }, 4000); // Cycle every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Timeline of almost moments</h2>
      <div className={styles.constellation}>
        <svg className={styles.lines}>
          <line x1="20%" y1="30%" x2="50%" y2="60%" className={styles.line} />
          <line x1="50%" y1="60%" x2="80%" y2="40%" className={styles.line} />
        </svg>
        {milestones.map((m) => (
          <div
            key={m.id}
            className={`${styles.starWrapper} ${activeMilestone?.id === m.id ? styles.active : ''}`}
            style={{ left: m.x, top: m.y }}
          >
            <div className={styles.star}></div>
            <span className={styles.label}>{m.label}</span>
          </div>
        ))}
      </div>
      {activeMilestone && (
        <div className={styles.infoBox}>
          <div className={styles.infoContent}>
            <h3>{activeMilestone.label}</h3>
            <p>{activeMilestone.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Timeline;
