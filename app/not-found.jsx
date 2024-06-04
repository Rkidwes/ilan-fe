import styles from "./page.module.scss";
import Link from "next/link"
import clsx from 'clsx'

export default async function NotFound() {

  return (
    <>
      <main id={styles.main} className={clsx(`fill-height`, styles.home)} style={{backgroundImage: "url('https://www.ilanbluestone.com/assets/Bio/ilan-bio-section.jpg')"}}>
        <div className="container">
          <div className={clsx(`${styles.content}`, `${styles.contentNarrow}`)}>
            <h2>404 error</h2>
            <p>We&rsquo;re sorry. This page doesn&rsquo;t seem to exist.</p>
            <Link href="/">Return to homepage</Link>
          </div>
        </div>
      </main>
    </>
  );
}
