import EventForm from "../ui/eventForm/eventForm";
import styles from "../page.module.scss";
import imageUrlBuilder from "@sanity/image-url";
import { client, sanityFetch } from "../sanity/client";
import { bookingsBgQuery } from "../sanity/query";

const { projectId, dataset } = client.config();

const urlFor = (source) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const metaDescription = 'Please visit this page to submit a booking enquiry with Ilan Bluestone.'

export const metadata = {
  title: 'Bookings',
  description: metaDescription,
  openGraph: {
    description: metaDescription
  },
  twitter: {
    description: metaDescription
  }
};

export default async function Bookings() {

  const bgimage = await sanityFetch({
    query: bookingsBgQuery,
    tags: ["siteSettings"],
  });

  let bgImage
  
  if (bgimage[0].bookingsBg != null) {
    bgImage =  urlFor(bgimage[0].bookingsBg).url()
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
