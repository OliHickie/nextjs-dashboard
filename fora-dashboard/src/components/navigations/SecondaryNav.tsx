'use client'

import Image from 'next/image';
import { SecondaryNavItem } from '@/types/NavigationItems.types';
import SideMenu from '@/components/sideMenu/sideMenu';

// styles
import styles from './NavigationStyles.module.scss';
import '@/styles/global.scss';

// Nav links
const navItems = [
  { icon: '/assets/Notifications.svg', label: 'Notifications', size: 24 },
  { icon: '/assets/Ticket.svg', label: 'Tickets', size: 18 },
];

const SecondaryNav: React.FC = () => {

  const renderLinks = (items: SecondaryNavItem[]) =>
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
    <aside className={`${styles.container} ${styles.secondaryNav}`}>
      <ul className={styles.mainList}>
        {renderLinks(navItems)}
      </ul>
      <SideMenu />
    </aside>
  );
};

export default SecondaryNav;
