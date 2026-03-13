import React from 'react';
import styles from './MusicCard.module.css';

interface MusicCardProps {
  title: string;
  mood: string;
  note: string;
}

const MusicCard: React.FC<MusicCardProps> = ({ title, mood, note }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.mood}>Mood: {mood}</p>
      <p className={styles.note}>{note}</p>
    </div>
  );
};

export default MusicCard;
