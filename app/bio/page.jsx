import styles from "../page.module.scss";
import clsx from 'clsx'
import {PortableText} from '@portabletext/react'

import { sanityFetch } from "../sanity/client"

const BIO_QUERY = `*[_type == "siteSettings"]{ biographyTitle, biography }`;

const metaDescription = 'Ilan Bluestone has been igniting the dance scene across the world with his unique tracks consisting of that &#039;progressive&#039; sound he builds on today.'

export const metadata = {
  title: 'Bio',
  description: metaDescription,
  openGraph: {
    description: metaDescription
  },
  twitter: {
    description: metaDescription
  }
};

export default async function Bio() {

  const content = await sanityFetch({query: BIO_QUERY});
  
  const { biographyTitle, biography } = content[0]
  return (
  <main id={styles.main} className={styles.bio} style={{'--bg': "url('/ilan-bio-section.jpg')"}}>
    <div className="container">
      <div className={clsx(`${styles.content}`, `${styles.contentNarrow}`)}>
        <h1>{biographyTitle}</h1>
        <PortableText value={biography}></PortableText>
      </div>
    </div>
  </main>
  );
}
