import styles from "../page.module.scss";
import Link from "next/link"
import clsx from 'clsx'

export default function Tour() {
  return (
  <main id={styles.main} style={{backgroundImage: "url('https://www.ilanbluestone.com/themes/ilan/img/new/bg-tour.jpg')"}}>
    <div className="container">
      <div className={styles.content}>
        <h1>Tour dates</h1>
        <p>No upcoming tour dates</p>
      </div>
    </div>
  </main>
  );
}
