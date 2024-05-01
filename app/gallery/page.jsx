import styles from "../page.module.scss";
import Link from "next/link"

const metaDescription = 'Check out the Ilan Bluestone&#039;s latest Instagram updates.'

export const metadata = {
  title: 'Gallery',
  description: metaDescription,
  openGraph: {
    description: metaDescription
  },
  twitter: {
    description: metaDescription
  }
};

export default function Gallery() {
  return (
  <main id={styles.main}>
    <div className="container">
      <div className={styles.content}>
        <h1>Gallery</h1>
        <p>Follow Ilan on <Link href="http://instagram.com/ibluestone" target="_blank" rel="noreferrer nofollow" >Instagram</Link></p>
      </div>
    </div>
  </main>
  );
}
