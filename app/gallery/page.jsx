import Link from "next/link"
import imageUrlBuilder from "@sanity/image-url";
import { client, sanityFetch } from "../sanity/client";
import ImageGallery from "../ui/gallery/gallery";
import styles from "../page.module.scss";

const IMAGES_QUERY = `*[_type == "gallery"]{_id, image, alt, caption}|order(date desc)`;

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

  const images = await sanityFetch({query: IMAGES_QUERY});

  let updatedImages = [];

  if (images.length > 0) {
    updatedImages = images.map(item => ({
      ...item,
      image: urlFor(item.image).url()
    }));
  }

  return (
  <main id={styles.main}>
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
