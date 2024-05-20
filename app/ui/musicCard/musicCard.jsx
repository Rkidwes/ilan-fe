import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import clsx from 'clsx';
import styles from './musicCard.module.scss';

function MusicCard({ item, index }) {

  return (
    <div key={index} className={styles.musicCardWrapper} itemProp="track" itemScope itemtype="http://schema.org/MusicRecording">
      <div className={styles.musicCard}>
        <Image src={`/${item.img}`} width="330" height="330" alt="" />
        <div className={styles.musicDetails}>
          <h4 itemprop="name" className={styles.musicName}>{ item.title }</h4>
          <p className={styles.musicDate}>Released: { item.details }</p>
          <p className={styles.musicListen}>Listen:</p>
          <Link href={ item.url } className={clsx(styles.musicIconsLink, styles.musicIconsLinkSpotify)} target="_blank">
            Listen on Spotify
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MusicCard;
