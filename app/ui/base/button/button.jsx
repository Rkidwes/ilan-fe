import React from 'react'
import Link from 'next/link'
import styles from './button.module.scss';


function Button({ link, children }) {
  return (
    <Link href={link} className={styles.btn}>
      <span>{children}</span>
    </Link>
  );
}

export default Button;
