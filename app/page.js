import styles from "./page.module.scss";
import Link from "next/link"
import clsx from 'clsx'
import Slider from './ui/slider/slider'
import {PortableText} from '@portabletext/react'
import imageUrlBuilder from "@sanity/image-url";
import { client, sanityFetch } from "./sanity/client"

const HOME_QUERY = `*[_type == "homePage"]{ hpTitle, hpText, hpLinkText, hpLinkURL }`;
const SLIDER_QUERY = `*[_type == "homePage"]{ slide1->, slide2->, slide3->, slide4-> }`;

const { projectId, dataset } = client.config();

const urlFor = (source) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

function getFileUrl(ref) {
  const [type, id, extension] = ref.split('-');
  return `https://cdn.sanity.io/files/${projectId}/${dataset}/${id}.${extension}`;
}

function getQuality() {
  const connectionType = navigator.connection?.effectiveType;

  if (connectionType === '3g') {
    return 50; // Lower quality for slower connections
  } else if (connectionType === '2g' || connectionType === 'slow-2g') {
    return 35; // Lower quality for slower connections
  } else {
    return 75;
  }
}

export default async function Home() {

  const content = await sanityFetch({
    query: HOME_QUERY,
    tags: ["homePage"]
  });

  const sliderContent = await sanityFetch({
    query: SLIDER_QUERY,
    tags: ["slide", "homePage"]
  });
  
  const { hpTitle, hpText, hpLinkText, hpLinkURL } = content[0]

  let slidesArray = []
  
  sliderContent.forEach((slideGroup, index) => {
    Object.entries(slideGroup).forEach(([key, slide]) => {
      if (slide != null ) {
        if (slide.assetType === 'image') {
          slide.imageURL = urlFor(slide.image).url()
        }
        if (slide.assetType === 'video') {
          slide.videoURL = getFileUrl(slide.video.asset._ref);
        }
      slidesArray.push(slide)
      }
    });
  });

  const quality = getQuality();
  console.log('555', quality)
  
  return (
    <>
      <Slider slidesArray={slidesArray} quality={quality} />
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
