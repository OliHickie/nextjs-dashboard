'use client'

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { MainNavItem } from '@/types/NavigationItems.types';

// styles
import styles from './NavigationStyles.module.scss';
import '@/styles/global.scss';

// Nav links
const navItems = [
  { href: '/', icon: '/assets/Icon.svg', label: 'Home', size: 18 },
  { href: '/calendar', icon: '/assets/Calendar.svg', label: 'Calendar', size: 18 },
  { href: '/check-in', icon: '/assets/Check-in.svg', label: 'Check In', size: 24 },
];

const secondaryItems = [
  { href: '/building', icon: '/assets/Building.svg', label: 'Building', size: 24 },
  { href: '/logout', icon: '/assets/Log-out.svg', label: 'Log out', size: 18 },
];

// Main navigation component
const MainNav: React.FC = () => {
  const pathname = usePathname();

  const renderLinks = (items: MainNavItem[]) =>
    items.map(({ href, icon, label, size }) => (
      <li key={label} className={styles.listItem}>
        <Link
          href={href}
          className={`${styles.listLink} ${pathname === href ? styles.active : ''}`}
        >
          <Image
            src={icon} 
            alt="" 
            width={size} 
            height={size} 
            className={styles.icon} 
          />
          <span className="sr-only">{label}</span>
        </Link>
      </li>
    ));

  return (
    <nav className={styles.container}>
      <div>
        <Image
          src="/assets/fora-logo.png"
          alt="Fora logo"
          width={32}
          height={32}
          className={styles.logo}
        />
        <ul className={styles.mainList}>
          {renderLinks(navItems)}
        </ul>
      </div>
      <ul className={styles.secondaryList}>
        {renderLinks(secondaryItems)}
      </ul>
    </nav>
  );
};

export default MainNav;
