"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import styles from './navItems.module.scss';

function NavItems({ links }) {

  const pathname = usePathname();
  console.log(pathname)

  return (
    <>
      {links.map((link, index) => (
        <li className={styles.navItem} key={index}>

          <Link href={link.linkHref} className={clsx(styles.navLink, {
              [styles.navLinkActive]: pathname === link.linkHref
            })}
          >{link.linkText}</Link>
        </li>
      ))}
    </>
  );
}

export default NavItems;
