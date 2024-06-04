import EventForm from "../ui/eventForm/eventForm";
import styles from "../page.module.scss";

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

export default function Bookings() {
  return (
  <main id={styles.main} style={{backgroundImage: "url('https://www.ilanbluestone.com/themes/ilan/img/new/bg-bookings.jpg')"}}>
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
