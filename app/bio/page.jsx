import styles from "../page.module.scss";
import Link from "next/link"
import clsx from 'clsx'

export default function Bio() {
  return (
  <main id={styles.main} style={{backgroundImage: "url('https://www.ilanbluestone.com/assets/Bio/ilan-bio-section.jpg')"}}>
    <div className="container">
      <div className={clsx(`${styles.content}`, `${styles.contentNarrow}`)}>
        <h1>Ilan&rsquo;s Story</h1>
        <p>Since bursting onto Anjunabeats with his debut solo release back in 2012, London-based producer ilan Bluestone’s whirlwind journey through the international dance music scene has been nothing short of monumental. With a string of recent hits such as ‘Paid For Love’, ‘Stranger To Your Love’ and ‘Rule The World’, plus remixes of Above & Beyond ‘Sun & Moon’ and Chicane‘Saltwater’ under his belt, he now has an impressive array of career live performances at prestigious venues including New York’sMadison Square Garden,London’s Wembley Arena, the Bill Graham Civic Auditorium in San Francisco and EDC Las Vegas to boot.</p>

        <p>2021 saw the release of his brand new artist album ‘Impulse’ on Anjunabeats; the highly anticipated follow up to his debut album ‘Scars’. Brand new singles ‘Hold On’ with Maor Levi & Alex Clare, and ‘Look At Me Now’ with Giuseppe De Luca put down a marker for what’s included on ilan’s stunning body of work. Following a sold-out ‘Impulse’ Album Launch Party at The Steel Yard, London, ilan embarks on a global album tour stretching into 2022, including performances in Colombia, Israel, Australia, North America and the UK, giving his loyal and dedicated army of growing followers the chance once again to experience his explosive, uplifting live performances.</p>

        <p>Ilan continues to impress both fans and new listeners all over the world with his distinct blend of bass-driven grooves and uplifting synths. With countless Beatport chart-toppers in his already impressive catalogue, ilan continues to push boundaries with his music, and etch himself into dance music history.</p>
      </div>
    </div>
  </main>
  );
}
