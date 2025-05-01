'use client'

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from './MainNav.module.scss';
import '@/styles/global.scss';

const navItems = [
  { href: '/', icon: '/assets/Icon.svg', label: 'Home', size: 18 },
  { href: '/calendar', icon: '/assets/Calendar.svg', label: 'Calendar', size: 18 },
  { href: '/check-in', icon: '/assets/Check-in.svg', label: 'Check In', size: 24 },
];

const secondaryItems = [
  { href: '/building', icon: '/assets/Building.svg', label: 'Building', size: 24 },
  { href: '/logout', icon: '/assets/Log-out.svg', label: 'Log out', size: 18 },
];

const MainNav: React.FC = () => {
  const pathname = usePathname();

  const renderLinks = (items: typeof navItems) =>
    items.map(({ href, icon, label, size }) => (
      <li key={label}>
        <Link
          href={href}
          className={`${pathname === href ? styles.active : ''}`}
        >
          <Image src={icon} alt="" width={size} height={size} className={styles.icon} />
          <span className="sr-only">{label}</span>
        </Link>
      </li>
    ));

  return (
    <div className={styles.container}>
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
    </div>
  );
};

export default MainNav;
