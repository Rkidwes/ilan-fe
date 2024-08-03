import styles from "./page.module.scss";
import Link from "next/link"
import clsx from 'clsx'
import Slider from './ui/slider/slider'
import {PortableText} from '@portabletext/react'
import imageUrlBuilder from "@sanity/image-url";
import { client, sanityFetch } from "./sanity/client"
import { sliderQuery, homeQuery } from "./sanity/query"

const { projectId, dataset } = client.config();

const urlFor = (source) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

function getFileUrl(ref) {
  const [type, id, extension] = ref.split('-');
  return `https://cdn.sanity.io/files/${projectId}/${dataset}/${id}.${extension}`;
}

export default async function Home() {

  const content = await sanityFetch({
    query: homeQuery,
    tags: ["siteSettings"],
  });

  const sliderContent = await sanityFetch({
    query: sliderQuery,
    tags: ["slide", "siteSettings"],
  });
  
  const { hpTitle, hpText, hpLinkText, hpLinkURL } = content[0]

  let slidesArray = []
  
  sliderContent.forEach((slideGroup, index) => {
    Object.entries(slideGroup).forEach(([key, slide]) => {
      if (slide.assetType === 'image') {
        slide.imageURL = urlFor(slide.image).url()
      }
      if (slide.assetType === 'video') {
        slide.videoURL = getFileUrl(slide.video.asset._ref);
      }
      slidesArray.push(slide)
    });
  });

  
  return (
    <>
      <Slider slidesArray={slidesArray} />
      <main id={styles.main} className={clsx(`fill-height`, styles.home)} style={{'--bg': "url('/ilan-bio-section.jpg')"}}>
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
