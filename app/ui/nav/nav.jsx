'use client';

import { useState } from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import NavItems from '../navItems/navItems'
import styles from './nav.module.scss';
import btnStyles from '../base/button/button.module.scss';

function Nav() {

  const links = [
    {
      linkText: 'Bio',
      linkHref: '/bio',
    },
    {
      linkText: 'Tour',
      linkHref: '/tour',
    },
    {
      linkText: 'Gallery',
      linkHref: '/gallery',
    },
    {
      linkText: 'Music',
      linkHref: '/music',
    },
    {
      linkText: 'Merch',
      linkHref: 'https://ilanbluestore.com',
      linkTarget: '_blank'
    }
  ]

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handling the click event directly within the component
  const handleClick = () => {
    toggleMenu(); // Call toggleMenu function to toggle the menu
  };

  return (
    <nav className={styles.nav}>
      <ul onClick={() => setIsMenuOpen(false)} className={clsx(styles.navList, {
        [styles.navListOpen]: isMenuOpen === true
      })}>
          <NavItems links={links} />
      </ul>
      <div className={styles.navButtons}>
        <Link href="/bookings" className={clsx(btnStyles.btn, btnStyles.btnCta)}><span>Bookings</span></Link>
        <button onClick={handleClick} className={clsx(styles.navToggle, btnStyles.btn, btnStyles.btnToggle, btnStyles.btnOutline, isMenuOpen ? styles.navListOpen : '')}>
          <svg viewBox="0 0 46 40" width="46" height="40" fill="#fff" className={styles.navToggleIcon}>
            <rect width="46" height="4"></rect>
            <rect y="18" width="46" height="4"></rect>
            <rect y="36" width="46" height="4"></rect>
          </svg>
        </button>
      </div>
    </nav>
  );
}

export default Nav;
