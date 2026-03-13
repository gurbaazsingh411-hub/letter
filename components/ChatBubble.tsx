import React from 'react';
import styles from './ChatBubble.module.css';

interface ChatBubbleProps {
  text: string;
  isSender?: boolean; // optional styling for sender/receiver
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ text, isSender = false }) => {
  return (
    <div className={isSender ? styles.sender : styles.receiver}>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default ChatBubble;
