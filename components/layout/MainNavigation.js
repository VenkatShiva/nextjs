import Link from 'next/link';
import mainNavigation from './mainNavigation.module.css';

function MainNavigation() {
  return (
    <div className={mainNavigation.navbar}>
      <p>React Meetups</p>
      <ul>
        <li>
          <Link href="/">All Meetups</Link>
        </li>
        <li>
          <Link href="/new-meetup">New Meetup</Link>
        </li>
      </ul>
    </div>
  );
}

export default MainNavigation;
