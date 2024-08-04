import Link from "next/link"
import imageUrlBuilder from "@sanity/image-url";
import { client, sanityFetch } from "../sanity/client";
import ImageGallery from "../ui/gallery/gallery";
import styles from "../page.module.scss";
import { imagesQueryNew } from "../sanity/query"

const BG_QUERY = `*[_type == "altGallery"]{galleryMetaDesc, galleryBg, galleryBgOpacity}`;

const { projectId, dataset } = client.config();

const urlFor = (source) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

export async function generateMetadata() {
  // Fetch the data
  const content = await sanityFetch({
    query: BG_QUERY,
    tags: ["altGallery"]
  });
  
  const { galleryMetaDesc } = content[0];

  return {
    title: 'Gallery',
    description: galleryMetaDesc,
    openGraph: {
      description: galleryMetaDesc
    },
    twitter: {
      description: galleryMetaDesc
    }
  };
}

export default async function Gallery() {

  const images = await sanityFetch({
    query: imagesQueryNew,
    tags: ["altGallery"],
  });

  const bgimage = await sanityFetch({
    query: BG_QUERY,
    tags: ["altGallery"]
  });

  let updatedImages = [];
  let bgImage;

  if (bgimage[0].galleryBg != null) {
    bgImage =  urlFor(bgimage[0].galleryBg).quality(50).url()
  }

  if (images.length > 0) {
    const imageGallery = images[0].images
    updatedImages = imageGallery.map(item => ({
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
