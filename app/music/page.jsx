import styles from "../page.module.scss";
import musicStyles from "./music.module.scss";
import MusicGrid from "../ui/musicGrid/musicGrid";

const metaDescription = 'Check out Ilan Bluestone&#039;s latest and hottest tracks available for download.'

export const metadata = {
  title: 'Music',
  description: metaDescription,
  openGraph: {
    description: metaDescription
  },
  twitter: {
    description: metaDescription
  }
};

export default function Music() {



  return (
  <main id={styles.main}>
    <div className="container">
      <div className={styles.content}>
        <h1>Music</h1>


        <div className={musicStyles.musicCards}>
          <MusicGrid />
        </div>
      </div>
    </div>
  </main>
  );
}
