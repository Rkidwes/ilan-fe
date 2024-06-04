import Link from 'next/link'
import clsx from 'clsx'
import styles from './footer.module.scss';

function Footer() {
  return (
    <footer className={clsx(`full-width`, styles.footer)}>
      <div className='container'>
        <div className={styles.footerGrid}>
          <div>
            <h5>Label &amp; Management</h5>
            <p><Link href="http://www.anjunabeats.com/" target="_blank" className={styles.anjunabeats}>&nbsp;go to Anjuna Beats</Link></p>
          </div>
          <div className={styles.footerGridSocials}>
            <h5>Follow Ilan on</h5>
            <nav className={styles.footerIcons}>
              <ul className={styles.footerIconsList}>
                <li className={styles.footerIconsItem}><Link className={clsx(styles.footerIconsLink, styles.footerIconsLinkSoundcloud)} href="https://soundcloud.com/ibluestone" target="_blank">Soundcloud</Link></li>
                <li className={styles.footerIconsItem}><Link className={clsx(styles.footerIconsLink, styles.footerIconsLinkTwitter)} href="http://www.twitter.com/ibluestone" target="_blank">Twitter</Link></li>
                <li className={styles.footerIconsItem}><Link className={clsx(styles.footerIconsLink, styles.footerIconsLinkFacebook)} href="http://www.facebook.com/ibluestone" target="_blank">Facebook</Link></li>
                <li className={styles.footerIconsItem}><Link className={clsx(styles.footerIconsLink, styles.footerIconsLinkInstagram)} href="http://www.instagram.com/ibluestone" target="_blank">Instagram</Link></li>
                <li className={styles.footerIconsItem}><Link className={clsx(styles.footerIconsLink, styles.footerIconsLinkBeatport)} href="http://www.beatport.com/artist/ibluestone/94766" target="_blank">Beatport</Link></li>
                <li className={styles.footerIconsItem}><Link className={clsx(styles.footerIconsLink, styles.footerIconsLinkYouTube)} href="http://www.youtube.com/ibluestone" target="_blank">YouTube</Link></li>
              </ul>
            </nav>
          </div>
          <div>
            <h5>Website Production</h5>
            <p><Link href="http://www.cyber-duck.co.uk/" target="_blank" className={styles.cyberduck}>&nbsp;go to cyber-duck.co.uk</Link></p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
