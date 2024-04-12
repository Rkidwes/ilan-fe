import React from 'react'
import Link from 'next/link'
import styles from './footer.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <p>&copy; 2024 North London Psychologists Ltd</p>
        <div className={styles.footerLinks}>
          <Link href="">Website by <span>Cyber-Duck</span></Link> | <Link href="">Privacy Policy</Link>
        </div>
      </div>
      <p className={styles.footerBottom}>Registered address: North London Psychologists Limited, 1 Sussex Villas, Common Road, Stanmore, London HA73HX, United Kingdom (Company Number: 11700481)</p>
    </footer>
  );
}

export default Footer;
