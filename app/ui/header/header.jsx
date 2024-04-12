import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Nav from '../nav/nav.jsx'
import Logo from '../../../public/north-london-psychologists-logo-svg.svg'
import styles from './header.module.scss';

// function NLPLogo() {
//   return <Logo />;
// }

function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.nlpLogo}>
        <Logo />
        {/* <Image
          src="/north-london-psychologists-logo.svg"
          alt="North London Psychologists Logo"
          className={styles.nlpLogo}
          width="75"
          height="75"
          priority
        /> */}
      </Link>
      <Nav />
    </header>
  );
}

export default Header;
