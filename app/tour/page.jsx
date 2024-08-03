import Link from "next/link"
import Image from "next/image"
import clsx from 'clsx';
import { format } from 'date-fns';
import styles from "../page.module.scss";
import btnStyles from '../ui/base/button/button.module.scss';
import tourStyles from "./tour.module.scss";
import imageUrlBuilder from "@sanity/image-url";
import { client, sanityFetch } from "../sanity/client";
import { eventsQuery } from "../sanity/query"

const { projectId, dataset } = client.config();

const urlFor = (source) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const metaDescription = 'This page has all the latest information on Ilan Bluestone&#039;s tour dates and where to access tickets from.'

export const metadata = {
  title: 'Tour',
  description: metaDescription,
  openGraph: {
    description: metaDescription
  },
  twitter: {
    description: metaDescription
  }
};

export default async function Tour() {

  const events = await sanityFetch({
    query: eventsQuery,
    tags: ["event"],
  });

  const bgimage = await sanityFetch({
    query: tourBgQuery,
    tags: ["siteSettings"],
  });

  let bgImage

  if (bgimage[0].tourBg != null) {
    bgImage =  urlFor(bgimage[0].tourBg).url()
  }

  return (
  <main id={styles.main}>

    <div className={styles.bgWrapper} style={{ '--bg': `url(${bgImage})`, '--opacity': `${bgimage[0].tourBgOpacity}`}} />

    <div className="container">
      <div className={styles.content}>
        <h1>Tour dates</h1>

        {events.length > 0 ? (
          <>
            <table className={tourStyles.schedule}>
              <tbody>
              {events.map((show) => 
                <tr key={show._id}>
                  <td className={tourStyles.date}>
                    {format(show.startDate, 'dd MMM yyyy')}
                    {show.endDate && <> to <br />{`${format(show.endDate, 'dd MMM yyyy')}`}</>}
                  </td>
                  <td className={tourStyles.venue}>{show.eventName}{show.location && <><br /> {`${show.location}`}</>}</td>
                  <td className={tourStyles.button}>
                    {show.ticketsURL && <Link href={show.ticketsURL} target="_blank" rel="noreferrer nofollow" className={clsx(btnStyles.btn, btnStyles.btnCta, btnStyles.btnOutline)}>
                      <span>Get Tickets</span>
                    </Link>}
                  </td>
                </tr>
              )}
              </tbody>
            </table>
            <Image className={tourStyles.logo} src="/concerts-by-songkick.png" alt="" width="116" height="30" />
          </>
          ) : (
          <p>No upcoming tour dates</p>
          )
        }
      </div>
    </div>
  </main>
  );
}
