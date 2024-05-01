import styles from "../page.module.scss";
import tourStyles from "./tour.module.scss";
import Link from "next/link"
import Image from "next/image"
import btnStyles from '../ui/base/button/button.module.scss';
import clsx from 'clsx'

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

const tours = [
  {
    date: '03 Mar 2023',
    venue: 'ILAN BLUESTONE AT THE STEEL YARD (MARCH 3, 2023)',
    location: 'London, UK',
    ticketsLink: '#'
  },
  {
    date: '03 Mar 2023',
    venue: 'ILAN BLUESTONE AT THE STEEL YARD (MARCH 3, 2023)',
    location: 'London, UK',
    ticketsLink: '#'
  }
];

export default function Tour() {
  return (
  <main id={styles.main} style={{backgroundImage: "url('https://www.ilanbluestone.com/themes/ilan/img/new/bg-tour.jpg')"}}>
    <div className="container">
      <div className={styles.content}>
        <h1>Tour dates</h1>
        {tours.length > 0 ? (
          <>
            <table className={tourStyles.schedule}>
              <tbody>
                {tours.map((show, index) =>
                  <tr key={index}>
                  <td className={tourStyles.date}>{show.date}</td>
                  <td className={tourStyles.venue}>{show.venue}{show.location && <><br /> {`${show.location}`}</>}</td>
                  <td className={tourStyles.button}>
                    <Link href={show.ticketsLink} target="_blank" rel="noreferrer nofollow" className={clsx(btnStyles.btn, btnStyles.btnCta, btnStyles.btnOutline)}>
                      <span>Get Tickets</span>
                    </Link>
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
