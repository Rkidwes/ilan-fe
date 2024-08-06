import { Suspense } from "react";
import Link from 'next/link'
import Image from 'next/image'
import { format } from 'date-fns'
import clsx from 'clsx';
import styles from './musicCard.module.scss';

function MusicCard({ item, index }) {

  return (
      <div key={index} className={styles.musicCardWrapper} itemProp="track" itemScope itemType="http://schema.org/MusicRecording">
        <div className={styles.musicCard}>
          <Image src={item.album.images[0].url} width="330" height="330" alt={ item.album.name } />
          <div className={styles.musicDetails}>
            <h4 itemProp="name" className={styles.musicName}>{ item.album.name }</h4>
            <p className={styles.musicDate}>Released: {format( item.album.release_date , "LLLL do, yyyy")}</p>
            <p className={styles.musicListen}>Listen:</p>
            <Link href={item.external_urls.spotify} className={clsx(styles.musicIconsLink, styles.musicIconsLinkSpotify)} target="_blank">
              Listen on Spotify
            </Link>
          </div>
        </div>
      </div>
  );
}

export default MusicCard;
