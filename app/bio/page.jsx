import styles from "../page.module.scss";
import clsx from 'clsx'
import {PortableText} from '@portabletext/react'

import { sanityFetch } from "../sanity/client"

const BIO_QUERY = `*[_type == "bio"]{bioMetaDesc, biographyTitle, biography }`;

export async function generateMetadata() {
  // Fetch the data
  const content = await sanityFetch({
    query: BIO_QUERY,
    tags: ["bio"]
  });
  
  const { bioMetaDesc } = content[0];

  return {
    title: 'Bio',
    description: bioMetaDesc,
    openGraph: {
      description: bioMetaDesc
    },
    twitter: {
      description: bioMetaDesc
    }
  };
}

export default async function Bio() {

  const content = await sanityFetch({
    query: BIO_QUERY,
    tags: ["bio"]
  });
  
  const { bioMetaDesc, biographyTitle, biography } = content[0]

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
