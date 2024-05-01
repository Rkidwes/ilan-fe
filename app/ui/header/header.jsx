import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Nav from '../nav/nav.jsx'
import styles from './header.module.scss';
import clsx from 'clsx'

function Header() {
  return (
    <header className={clsx(`full-width`, styles.header)} itemScope role="banner">
      <div className='container'>
        <div className={styles.headerInner}>
          <Link href="/">
            <Image
              src="/ilan-bluestone.png"
              alt="Ilan Bluestone Logo"
              className={styles.iBLogo}
              width="162"
              height="54"
              priority
            />
          </Link>
          <Nav />
        </div>
      </div>
    </header>
  );
}

export default Header;
