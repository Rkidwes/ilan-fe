'use client';

import React, { useRef } from 'react';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';

import Image from 'next/image'
import clsx from 'clsx';

import '@splidejs/react-splide/css';
import './slider.scss';

const Slider = () => {

  const mainRef = useRef(null);

  const slides = [
    {
      title: "'Impulse', the brand new 2nd artist album",
      subtitle: 'Released 7th May 2021',
      linkText: 'Out now!!',
      linkUrl: '#',
      media: '/ANJCD095ID-copy-1.jpg',
      pagination: 'Slide 1',
    },
    // {
    //   title: 'Title 2 goes here',
    //   subtitle: 'A second subtitle goes here',
    //   linkText: 'Click this now',
    //   linkUrl: '#',
    //   pagination: 'Slide 2',
    // },
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
      pagination: 'Lorejm ipsum sit dolor'
    },
  ]

  const renderSlides = () => (
    <SplideTrack>
      {/* width = '2000', height = '2000' */}
      {slides.map(({ title, subtitle, linkText, linkUrl, media }, index) => (
        media ? (
        <SplideSlide key={index} className={`splide__slide__${index}`}>
          <Image 
            src={media} 
            alt={title} 
            fill
            sizes='100vw'
            priority={index === 0}
          />
          <div className='container'>
            <h2>{title}</h2>
            <p className="large">{subtitle}</p>
            <p><a href={linkUrl} className="small">{linkText}</a></p>
          </div>
        </SplideSlide>)
        : 
        (<SplideSlide key={index}>
          <div></div>
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
    // autoplay : true,
    rewind : true,
    height: '100vh',
    breakpoints: {
      679: {
        height: '540px',
      },
      1023: {
        height: '720px',
      }
    }
    // video: {
    //   autoplay: true,
    //   mute : true,
    //   loop: true,
    //   hideControls: true,
    // }
  };

  const fallback = slides[0].media
  console.log(fallback)

  return (
    <>
      <div className="slider">
        {/* <Image 
          src={slides[0].media} 
          alt={slides[0].title} 
          fill
          sizes='100vw'
          priority
          className="fallbackImage"
        /> */}
        <Splide
          onPaginationMounted={ (splide) => { 
            const items = splide.Components.Pagination.items
            items.forEach(item => {
              item.button.textContent = slides[item.page].pagination
            });
          }}
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