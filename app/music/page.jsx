import MusicGrid from "../ui/musicGrid/musicGrid";
import styles from "../page.module.scss";
import musicStyles from "./music.module.scss";
import imageUrlBuilder from "@sanity/image-url";
import BackgroundImage from '../ui/backgroundImage/backgroundImage'
import { client, sanityFetch } from "../sanity/client";

const BG_QUERY = `*[_type == "music"]{musicMetaDesc, musicBg, musicBgOpacity}`;

const { projectId, dataset } = client.config();

const urlFor = (source) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

export async function generateMetadata() {
  // Fetch the data
  const content = await sanityFetch({
    query: BG_QUERY,
    tags: ["music"]
  });
  
  const { musicMetaDesc } = content[0];

  return {
    title: 'Music',
    description: musicMetaDesc,
    openGraph: {
      description: musicMetaDesc
    },
    twitter: {
      description: musicMetaDesc
    }
  };
}

export default async function Music() {

  const bgimage = await sanityFetch({
    query: BG_QUERY,
    tags: ["music"]
  });

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
