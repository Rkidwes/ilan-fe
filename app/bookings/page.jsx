import EventForm from "../ui/eventForm/eventForm";
import styles from "../page.module.scss";
import imageUrlBuilder from "@sanity/image-url";
import { client, sanityFetch } from "../sanity/client";

const BG_QUERY = `*[_type == "bookings"]{bookingsMetaDesc, bookingsBg, bookingsBgOpacity}`;

const { projectId, dataset } = client.config();

const urlFor = (source) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

export async function generateMetadata() {
  // Fetch the data
  const content = await sanityFetch({
    query: BG_QUERY,
    tags: ["bookings"]
  });
  
  const { bookingsMetaDesc } = content[0];

  return {
    title: 'Bookings',
    description: bookingsMetaDesc,
    openGraph: {
      description: bookingsMetaDesc
    },
    twitter: {
      description: bookingsMetaDesc
    }
  };
}

export default async function Bookings() {

  const bgimage = await sanityFetch({
    query: BG_QUERY,
    tags: ["bookings"]
  });

  let bgImage
  
  if (bgimage[0].bookingsBg != null) {
    bgImage =  urlFor(bgimage[0].bookingsBg).quality(50).url()
  }

  return (
  <main id={styles.main}>
    
    <div className={styles.bgWrapper} style={{ '--bg': `url(${bgImage})`, '--opacity': `${bgimage[0].bookingsBgOpacity}`}} />

    <div className="container">
      <div className={styles.content}>
        <h1>Bookings</h1>
        <p className={styles.hero}>For enquiries, please fill in the form below.</p>
        <EventForm />      
      </div>
    </div>
  </main>
  );
}
