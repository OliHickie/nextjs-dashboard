'use-client'

import { getTickets } from '@/services/getTickets.service';
import { useEffect, useState } from 'react';

// types
import { Ticket } from '@/types/Tickets.types';
 
// styles
import styles from './SideMenu.module.scss';

const SideMenu : React.FC = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getTickets();
        setTickets(data);
      } catch (err) {
        // TODO: Handle API errors
        console.error('Error fetching tickets:', err);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  return (
    <div className={styles.container}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {tickets.map((ticket) => (
            <li key={ticket.id}>{ticket.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SideMenu;