import Link from 'next/link';

const MainNav: React.FC = () => {
  return (
    <nav className="">
      <ul className="">
        <li>
          <Link href="/">
            1
          </Link>
        </li>
        <li>
          <Link href="/">
            2
          </Link>
        </li>
        <li>
          <Link href="/">
            3
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
