'use client'

import Image from 'next/image';

// styles
import styles from './NavigationStyles.module.scss';
import '@/styles/global.scss';

// Nav links
const navItems = [
  { icon: '/assets/Notifications.svg', label: 'Notifications', size: 24 },
  { icon: '/assets/Ticket.svg', label: 'Tickets', size: 18 },
];

const SecondaryNav: React.FC = () => {

  const renderLinks = (items: typeof navItems) =>
    items.map(({ icon, label, size }) => (
      <li key={label} className={styles.listItem}>
        <button className={styles.listLink} type="button">
          <Image 
            src={icon}
            alt="" 
            width={size} 
            height={size} 
            className={styles.icon} 
          />
          <span className="sr-only">{label}</span>
        </button>
      </li>
    ));

  return (
    <aside
      className={`${styles.container} ${styles.secondaryNav}`} 
      aria-label="Secondary Navigation"
    >
      <ul className={styles.mainList}>
        {renderLinks(navItems)}
      </ul>
    </aside>
  );
};

export default SecondaryNav;
