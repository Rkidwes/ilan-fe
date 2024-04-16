'use client'

import React, { useEffect } from 'react'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';

import '@splidejs/react-splide/css';

import styles from './slider.scss';
import clsx from 'clsx'

function Slider() {
  return (
    <section className={clsx(`fill-height`, `slider`)}>
      <Splide aria-label="Latest News" className="splide" hasTrack={ false }
        options={ {
          type : 'loop',
          autoplay : true,
          rewind : true,
          height : '100vh',
        } }
      >
        <SplideTrack className={styles.splide__track}>
          <SplideSlide className={styles.splide__slide}>
            <img src="https://www.ilanbluestone.com/assets/Home/ANJCD095ID-copy-1.jpg" alt="Image 1"/>
            {/* <div className='container'>
              <h2>oiwrtu seroiunwe4 w4toiw4t</h2>
              <p>liubhwr3g w3oihjw34g w34opiw4 oi</p>
              <p><a href="#">oirnthq</a></p>
            </div> */}
          </SplideSlide>
          <SplideSlide className={styles.splide__slide}>
            <img src="https://www.ilanbluestone.com/assets/Home/Screen-Shot-2022-03-07-at-9.43.46-AM-copy.jpg" alt="Image 2"/>
          </SplideSlide>
        </SplideTrack>
        <div className="splide__arrows">
          <button className={clsx(`splide__arrow`, `splide__arrow--prev`)}>Prev</button>
          <button className="splide__arrow splide__arrow--next">Next</button>
        </div>
        <ul className="splide__pagination"></ul>
      </Splide>
    </section>
  );
}

export default Slider;
