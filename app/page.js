import styles from "./page.module.scss";
import Link from "next/link"
import clsx from 'clsx'
import Slider from './ui/slider/slider'
import {PortableText} from '@portabletext/react'

import { sanityFetch } from "./sanity/client";

const HOME_QUERY = `*[_type == "siteSettings"]{ hpTitle, hpText, hpLinkText, hpLinkURL }`;

export default async function Home() {

  const content = await sanityFetch({query: HOME_QUERY});
  
  const { hpTitle, hpText, hpLinkText, hpLinkURL } = content[0]

  return (
    <>
      <Slider />
      <main id={styles.main} className={clsx(`fill-height`, styles.home)} style={{backgroundImage: "url('https://www.ilanbluestone.com/assets/Bio/ilan-bio-section.jpg')"}}>
        <div className="container">
          <div className={clsx(`${styles.content}`, `${styles.contentNarrow}`)}>
            <h2>{hpTitle}</h2>
            <PortableText
            value={hpText}></PortableText>
            <p><Link href={hpLinkURL}>{hpLinkText}</Link></p>
          </div>
        </div>
      </main>
    </>
  );
}
