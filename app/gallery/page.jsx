import Link from "next/link"
import imageUrlBuilder from "@sanity/image-url";
import { client, sanityFetch } from "../sanity/client";
import ImageGallery from "../ui/gallery/gallery";
import styles from "../page.module.scss";
import { imagesQuery } from "../sanity/query"

const BG_QUERY = `*[_type == "siteSettings"]{galleryBg, galleryBgOpacity}`;

const { projectId, dataset } = client.config();

const urlFor = (source) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;
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
export default async function Gallery() {
  const images = await sanityFetch({
    query: imagesQuery,
    tags: ["gallery"],
  });

  const bgimage = await sanityFetch({query: BG_QUERY});

  let updatedImages = [];
  let bgImage;

  if (bgimage[0].galleryBg != null) {
    bgImage =  urlFor(bgimage[0].galleryBg).url()
  }

  if (images.length > 0) {
    updatedImages = images.map(item => ({
      ...item,
      image: urlFor(item.image).url()
    }));
  }

  return (
  <main id={styles.main}>

    <div className={styles.bgWrapper} style={{ '--bg': `url(${bgImage})`, '--opacity': `${bgimage[0].tourBgOpacity}`}} />

    <div className="container">
      <div className={styles.content}>
        <h1>Gallery</h1>

        {images.length > 0 && <ImageGallery images={updatedImages} />}

        <p>Follow Ilan on <Link href="http://instagram.com/ibluestone" target="_blank" rel="noreferrer nofollow" >Instagram</Link></p>
      </div>
    </div>
  </main>
  );
}
