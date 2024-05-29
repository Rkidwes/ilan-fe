import styles from "./page.module.scss";
import Link from "next/link"
import clsx from 'clsx'

import Slider from './ui/slider/slider'

export default function Home() {
  return (
    <>
      <Slider />
      <main id={styles.main} className={clsx(`fill-height`, styles.home)} style={{backgroundImage: "url('https://www.ilanbluestone.com/assets/Bio/ilan-bio-section.jpg')"}}>
        <div className="container">
          <div className={clsx(`${styles.content}`, `${styles.contentNarrow}`)}>
            <h2>Ilan&rsquo;s Story</h2>
            <p>Since bursting onto Anjunabeats with his debut solo release back in 2012, London-based producer ilan Bluestone’s whirlwind journey through the international dance music scene has been nothing short of monumental.</p>
            <p><Link href="/bio">Read the full story</Link></p>
          </div>
        </div>
      </main>
    </>
  );
}
