import EventForm from "../ui/eventForm/eventForm";
import styles from "../page.module.scss";
import imageUrlBuilder from "@sanity/image-url";
import BackgroundImage from '../ui/backgroundImage/backgroundImage'
import { client, sanityFetch } from "../sanity/client";

const BG_QUERY = `*[_type == "siteSettings"]{bookingsBg, bookingsBgOpacity}`;

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

  const bgimage = await sanityFetch({query: BG_QUERY});

  let bgImage
  
  if (bgimage[0].bookingsBg != null) {
    bgImage =  urlFor(bgimage[0].bookingsBg).url()
  }

  return (
  <main id={styles.main} style={{ backgroundImage: `url(${bgImage})`}}>

    {/* {bgImage && <BackgroundImage image={bgImage} opacity={bgimage[0].bookingsBgOpacity != null && bgimage[0].bookingsBgOpacity} />} */}

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
