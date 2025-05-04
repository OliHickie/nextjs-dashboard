'use client'

import { timeAgo } from '@/utils/timeUtils.utils'
 
// styles
import styles from './TicketItem.module.scss';

// types
import { Ticket } from '@/types/Tickets.types';
import { useState } from 'react';

const TicketItem: React.FC<{ ticket: Ticket }> = ({ ticket }) => {
  const [activeButton, setActiveButton] = useState(0);

  const getTimeAgo = () => {
    const date = new Date(ticket.createdAt);
    return timeAgo(date);
  };

  const handleButtonClick = (index: number) => {
    setActiveButton(index);
  };

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <h3 className={styles.headerText}>{ticket.title}</h3>
        <span className={styles.time}>{getTimeAgo()}</span>
      </div>
      
      <p className={styles.description}>{ticket.description}</p>

      <div className={styles.controlsContainer}>
        {[0, 1, 2].map((index) => (
          <button
            key={index}
            className={`${styles.controlButton} ${activeButton === index ? styles.active : ''}`}
            onClick={() => handleButtonClick(index)}
            aria-label={`Select control ${index + 1}`}
            aria-pressed={activeButton === index}
          >
            <span className="sr-only">{`Select control ${index + 1}`}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TicketItem;