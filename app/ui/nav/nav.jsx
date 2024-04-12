'use client';

import React, { useState } from 'react'
import styles from './nav.module.scss';
import clsx from 'clsx'

import NavItems from '../navItems/navItems'

function Nav() {

  const links = [
    {
      linkText: 'About',
      linkHref: '/about',
    },
    {
      linkText: 'Therapy',
      linkHref: '/therapy',
    },
    {
      linkText: 'Fees',
      linkHref: '/fees',
    },
    {
      linkText: 'Testimonials',
      linkHref: '/testimonials',
    },
    {
      linkText: 'Blog',
      linkHref: '/blog',
    },
    {
      linkText: 'Contact',
      linkHref: '/contact',
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
      <button onClick={handleClick} className={styles.navToggle}>X</button>
      <ul className={clsx(styles.navList, {
        [styles.navListOpen]: isMenuOpen === true
      })}>
          <NavItems links={links} />
      </ul>
    </nav>
  );
}

export default Nav;
