'use client'

import { useState } from 'react';
import Image from 'next/image';
import { SecondaryNavItem } from '@/types/NavigationItems.types';
import ToolsMenu from '@/components/toolsMenu/ToolsMenu';

// styles
import styles from './NavigationStyles.module.scss';
import '@/styles/global.scss';

// Nav links
const navItems = [
  { icon: '/assets/Notifications.svg', label: 'Notifications', size: 24 },
  { icon: '/assets/Ticket.svg', label: 'Tickets', size: 18 },
];

const SecondaryNav: React.FC = () => {
  const [isToolsMenuOpen, setIsToolsMenuOpen] = useState<boolean>(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const handleItemClick = (label: string) => {
    if (activeItem === label) {
      setIsToolsMenuOpen(!isToolsMenuOpen);
      setActiveItem(null);
      return;
    }
    setActiveItem(label);
    setIsToolsMenuOpen(true);
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
      {isToolsMenuOpen && <ToolsMenu />}
    </aside>
  );
};

export default SecondaryNav;
