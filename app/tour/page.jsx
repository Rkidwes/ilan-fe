import Link from "next/link"
import Image from "next/image"
import clsx from 'clsx';
import { format, parseISO } from 'date-fns';
import styles from "../page.module.scss";
import btnStyles from '../ui/base/button/button.module.scss';
import tourStyles from "./tour.module.scss";
import imageUrlBuilder from "@sanity/image-url";
import { client, sanityFetch } from "../sanity/client";
import { eventsQuery } from "../sanity/query"

const BG_QUERY = `*[_type == "tour"]{tourMetaDesc, tourBg, tourBgOpacity}`;

const { projectId, dataset } = client.config();

const urlFor = (source) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

export async function generateMetadata() {
  // Fetch the data
  const content = await sanityFetch({
    query: BG_QUERY,
    tags: ["tour"]
  });
  
  const { tourMetaDesc } = content[0];

  return {
    title: 'Tour',
    description: tourMetaDesc,
    openGraph: {
      description: tourMetaDesc
    },
    twitter: {
      description: tourMetaDesc
    }
  };
}

export default async function Tour() {

  const events = await sanityFetch({
    query: eventsQuery,
    tags: ["event"],
  });

  const bgimage = await sanityFetch({
    query: BG_QUERY,
    tags: ["tour"]
  });

  let bgImage

  if (bgimage[0].tourBg != null) {
    bgImage =  urlFor(bgimage[0].tourBg).quality(50).url()
  }

  const sortedEvents = events
  .sort((a, b) => new Date(a.startDate) - new Date(b.startDate))
  .map((event) => ({
    ...event,
    formattedStartDate: format(parseISO(event.startDate), 'dd MMM yyyy'),
    formattedEndDate: event.endDate ? format(parseISO(event.endDate), 'dd MMM yyyy') : null,
  }));

  return (
  <main id={styles.main}>

    <div className={styles.bgWrapper} style={{ '--bg': `url(${bgImage})`, '--opacity': `${bgimage[0].tourBgOpacity}`}} />

    <div className="container">
      <div className={styles.content}>
        <h1>Tour dates</h1>

        {sortedEvents.length > 0 ? (
          <>
            <table className={tourStyles.schedule}>
              <tbody>
                {sortedEvents.map(({ _id, eventName, location, formattedStartDate, formattedEndDate, ticketsURL }) => (
                  <tr key={_id}>
                    <td className={tourStyles.date}>
                      {formattedStartDate}
                      {formattedEndDate && (
                        <>
                          to <br /> {formattedEndDate}
                        </>
                      )}
                    </td>
                    <td className={tourStyles.venue}>
                      {eventName}
                      {location && (
                        <>
                          <br /> {location}
                        </>
                      )}
                    </td>
                    <td className={tourStyles.button}>
                      {ticketsURL && (
                        <Link
                          href={ticketsURL}
                          target="_blank"
                          rel="noreferrer nofollow"
                          className={clsx(btnStyles.btn, btnStyles.btnCta, btnStyles.btnOutline)}
                        >
                          <span>Get Tickets</span>
                        </Link>
                      )}
                    </td>
                  </tr>
                ))}
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
