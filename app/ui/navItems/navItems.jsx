"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import styles from './navItems.module.scss';

function NavItems({ links }) {

  const pathname = usePathname();

  return (
    <>
      {links.map((link, index) => (
        <li className={styles.navItem} key={index}>

          <Link href={link.linkHref} className={clsx(styles.navLink, {
              [styles.navLinkActive]: pathname === link.linkHref
            })}
          ><span>{link.linkText}</span></Link>
        </li>
      ))}
    </>
  );
}

export default NavItems;
