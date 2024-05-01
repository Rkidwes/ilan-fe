'use client';

import React, { useRef, useEffect } from 'react';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import { Video } from '@splidejs/splide-extension-video';
// import VideoBg from "reactjs-videobg";

import Image from 'next/image'
import clsx from 'clsx';

import '@splidejs/react-splide/css';
import '@splidejs/splide-extension-video/dist/css/splide-extension-video.min.css';

import './slider.scss';

const Slider = () => {
  const mainRef = useRef(null);
  const thumbsRef = useRef(null);

  const slides = [
    {
      title: 'Title goes here',
      subtitle: 'A subtitle goes here',
      linkText: 'Click this',
      linkUrl: '#',
      media: '/ANJCD095ID-copy-1.jpg',
      pagination: 'Slide 1',
    },
    {
      title: 'Title 2 goes here',
      subtitle: 'A second subtitle goes here',
      linkText: 'Click this now',
      linkUrl: '#',
      pagination: 'Slide 2',
      // media: '/Screen-Shot-2022-03-07-at-9.43.46-AM-copy.jpg',
      // width: '1904',
      // height: '1530',
    },
    {
      title: 'Title 3 goes here',
      subtitle: 'A third subtitle goes here',
      linkText: 'Click this',
      linkUrl: '#',
      media: '/ANJ714D-copy.jpg',
      pagination: 'Slide 3'
    },
    {
      title: 'Title 2 goes here',
      subtitle: 'A second subtitle goes here',
      linkText: 'Click this now',
      linkUrl: '#',
      media: '/Screen-Shot-2022-03-07-at-9.43.46-AM-copy.jpg',
      pagination: 'Lorejm ipsum sit dolor and on and on and on and on',
      width: '1904',
      height: '1530',
    },
  ]

  useEffect(() => {
    if (mainRef.current && thumbsRef.current && thumbsRef.current.splide) {
      mainRef.current.sync(thumbsRef.current.splide);
    }
  }, []);

// https://www.youtube.com/watch?v=cdz__ojQOuU

// data-splide-youtube

  const renderSlides = () => (
    <SplideTrack>
      {slides.map(({ title, subtitle, linkText, linkUrl, media, width = '2000', height = '2000' }, index) => (
        media ? (<SplideSlide key={index} className={`splide__slide__${index}`}>
          <Image src={media} alt={title} width={width} height={height} priority={index === 0} />
          <div className='container'>
            <h2>{title}</h2>
            <p>{subtitle}</p>
            <p><a href={linkUrl}>{linkText}</a></p>
          </div>
        </SplideSlide>)
        : 
        (<SplideSlide key={index} data-splide-youtube="https://www.youtube.com/watch?v=cdz__ojQOuU">
          <div className='container'>
            <h2>{title}</h2>
            <p>{subtitle}</p>
            <p><a href={linkUrl}>{linkText}</a></p>
          </div>
        </SplideSlide>)
      ))}
    </SplideTrack>
  );

  const mainOptions = {
    type : 'loop',
    autoplay : true,
    rewind : true,
    height : '100vh',
    video: {
      autoplay: true,
      mute : true,
      loop: true,
      hideControls: true,
      playerOptions: {
        youtube: { 
          controls: '0',
         },
      },
    }
  };

  return (
    <>
    {/* <div>

      <div style={{ height: '100vh', backgroundColor: 'red'}}>

      </div>
      
    </div> */}

    <div className="slider">

      <Splide
        onPaginationMounted={ (splide) => { 
          const items = splide.Components.Pagination.items
          items.forEach(item => {
            item.button.textContent = slides[item.page].pagination
          });
        }}
        extensions={{ Video }}
        options={mainOptions}
        ref={mainRef}
        hasTrack={ false }
        aria-label="Latest News"
      >
        {renderSlides()}
        <div className="splide__arrows">
          <button className={clsx(`splide__arrow`, `splide__arrow--prev`)}>Prev</button>
          <button className={clsx(`splide__arrow`, `splide__arrow--next`)}>Next</button>
        </div>

        <ul className="splide__pagination splide__pagination--custom">
        </ul>
      </Splide>
    </div>
    </>
  );
};

export default Slider;