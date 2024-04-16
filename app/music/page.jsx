import styles from "../page.module.scss";
import musicStyles from "./music.module.scss";
import Link from "next/link"
import Image from "next/image"
import clsx from 'clsx'

export default function Music() {

  const music = [
    {
      title: 'Saltwater - Ilan Bluestone Remix',
      details: 'September 1st, 2023',
      url: 'https://open.spotify.com/track/6kfV43UhRUbv8FMRNs19JN',
      img: 'ab67616d0000b273a669b75cbe577aed183d0032.jpeg'
    },
    {
      title: 'Futuro',
      details: 'July 7th, 2023',
      url: 'https://open.spotify.com/track/302izEeCgAxrLEpnXM4nNP',
      img: 'ab67616d0000b2730caecc12139bd5c39bb38861.jpeg'
    },
    {
      title: 'Another You - Ilan Bluestone Remix',
      details: 'March 24th, 2023',
      url: 'https://open.spotify.com/track/2ixKupDyL0IBm1iloZzK1H',
      img: 'ab67616d0000b2735b3fe7104f3357af83bc08a2.jpeg'
    },
    {
      title: 'Now We Are Free',
      details: 'April 5th, 2024',
      url: 'https://open.spotify.com/track/2xfL7Mx5AqbWP0YcwxlcI7',
      img: 'ab67616d0000b273e5b8aad9fdf4aedbdea1f732.jpeg'
    },
    {
      title: 'Hypnotized - Markus Schulz Remix',
      details: 'August 12th, 2020',
      url: 'https://open.spotify.com/track/7wMRWeyvKI0u83vWbjbhH1',
      img: 'ab67616d0000b27348e6dd9fe5f0d10f7323fd72.jpeg'
    },
    {
      title: 'Will We Remain? - Spencer Brown Remix',
      details: 'December 21st, 2018',
      url: 'https://open.spotify.com/track/2JtLVLcBKBoMoM3C8OMtu4',
      img: 'ab67616d0000b273c12dc6c887fe27c95fa69d11.jpeg'
    },
    {
      title: 'Out Of The Blue (Mixed) - Ilan Bluestone Remix',
      details: 'January 28th, 2021',
      url: 'https://open.spotify.com/track/42BfBxgaKup99w9x7ijEC9',
      img: 'ab67616d0000b2739e5cc7c40a5fb437542420a1.jpeg'
    },
    {
      title: 'Alone - Ilan Bluestone Remix',
      details: 'November 3rd, 2023',
      url: 'https://open.spotify.com/track/1szDFtoqP13cJKSL66H0Ol',
      img: 'ab67616d0000b273dc8f8d1144fa201250b20282.jpeg'
    },
    {
      title: 'Vulnerable (Tritonia 461) - Ilan Bluestone Remix',
      details: 'January 29th, 2024',
      url: 'https://open.spotify.com/track/0dRyGiCjVPgFNo9dB8bkY9',
      img: 'ab67616d0000b27327472eb80dd5709e403de6b6.jpeg'
    },
    {
      title: 'Saltwater (Mixed) - Ilan Bluestone Remix',
      details: 'December 8th, 2023',
      url: 'https://open.spotify.com/track/60KKMKcBPwUKsoAZZHzol2',
      img: 'ab67616d0000b2734304fd6a18238af0b567917e.jpeg'
    },
  ]

  return (
  <main id={styles.main}>
    <div className="container">
      <div className={styles.content}>
        <h1>Music</h1>
        <div className={musicStyles.musicCards}>

          {music.map((item, index) => (
            <div key={index} className={musicStyles.musicCardWrapper} itemprop="track" itemscope itemtype="http://schema.org/MusicRecording">
              <div className={musicStyles.musicCard}>
                <Image src={`/${item.img}`} width="330" height="330" alt="" />
                <div className={musicStyles.musicDetails}>
                  <h4 itemprop="name" className={styles.musicName}>{ item.title }</h4>
                  <p className={styles.musicDate}>Released: { item.details }</p>
                  <p className={styles.musicListen}>Listen:</p>
                  <Link href={ item.url } className={clsx(musicStyles.musicIconsLink, musicStyles.musicIconsLinkSpotify)} target="_blank">
                    Listen on Spotify
                  </Link>
                </div>
              </div>
            </div>
          ))}
          
        </div>
      </div>
    </div>
  </main>
  );
}
