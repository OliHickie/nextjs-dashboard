'use client'

import { useState } from 'react';
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
  const [isSideMenuOpen, setIsSideMenuOpen] = useState<boolean>(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const handleItemClick = (label: string) => {
    if (activeItem === label) {
      setIsSideMenuOpen(!isSideMenuOpen);
      setActiveItem(null);
      return;
    }
    setActiveItem(label);
    setIsSideMenuOpen(true);
  };

  const renderLinks = (items: SecondaryNavItem[]) =>
    items.map(({ icon, label, size }) => (
      <li key={label} className={styles.listItem}>
        <button
          className={`${styles.listLink} ${activeItem === label ? styles.active : ''}`}
          type="button"
          onClick={() => handleItemClick(label)}
        >
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
      <ul className={styles.mainList}>{renderLinks(navItems)}</ul>
      {isSideMenuOpen && <SideMenu />}
    </aside>
  );
};

export default SecondaryNav;
