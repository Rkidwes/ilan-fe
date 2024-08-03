import MusicGrid from "../ui/musicGrid/musicGrid";
import styles from "../page.module.scss";
import musicStyles from "./music.module.scss";
import imageUrlBuilder from "@sanity/image-url";
import { client, sanityFetch } from "../sanity/client";

const BG_QUERY = `*[_type == "siteSettings"]{musicBg, musicBgOpacity}`;

const { projectId, dataset } = client.config();

const urlFor = (source) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;
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

export default async function Music() {

  const bgimage = await sanityFetch({query: BG_QUERY});

  let bgImage
  
  if (bgimage[0].musicBg != null) {
    bgImage =  urlFor(bgimage[0].musicBg).url()
  }

  return (
  <main id={styles.main}>

    <div className={styles.bgWrapper} style={{ '--bg': `url(${bgImage})`, '--opacity': `${bgimage[0].tourBgOpacity}`}} />

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
