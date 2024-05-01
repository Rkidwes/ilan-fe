'use client';

import React, { useRef, useState } from 'react';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';

import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx';

import '@splidejs/react-splide/css';
import './slider.scss';

const Slider = () => {

  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  // const [isFullscreen, setIsFullscreen] = useState(false);

  const mainRef = useRef(null);
  const videoRef = useRef(null);

  const togglePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause(); // Pause the video
      setIsPlaying(false);      // Update state to paused
    } else {
      videoRef.current.play();  // Play the video
      setIsPlaying(true);       // Update state to playing
    }
  };

  const toggleMute = () => {
    if (isMuted) {
      videoRef.current.muted = false; // Unmute the video
      setIsMuted(false); // Update state to unmuted
    } else {
      videoRef.current.muted = true; // Mute the video
      setIsMuted(true); // Update state to muted
    }
  };

  // const toggleFullscreen = () => {
  //   if (!isFullscreen) {
  //     if (videoRef.current.requestFullscreen) {
  //       videoRef.current.requestFullscreen(); // Enter fullscreen mode
  //     }
  //     setIsFullscreen(true); // Update state to fullscreen
  //     console.log(isFullscreen);
  //   } else {
  //     if (document.exitFullscreen) {
  //       document.exitFullscreen(); // Exit fullscreen mode
  //     }
  //     setIsFullscreen(false); // Update state to normal mode
  //     console.log(isFullscreen);
  //   }
  // };

  const slides = [
    {
      title: "'Impulse', the brand new 2nd artist album",
      subtitle: 'Released 7th May 2021',
      linkText: 'Out now!!',
      linkUrl: 'https://anjunabeats.ffm.to/impulse.gcn',
      external: true,
      media: '/Impulse-Ilan-Bluestone.jpg',
      pagination: 'New Album',
    },
    {
      title: 'ABGT 450',
      subtitle: "See ilan's performance at The Drumsheds in London for ABGT 450",
      linkText: 'Watch The Video',
      linkUrl: 'https://youtu.be/0oy1aDdZWec',
      external: true,
      media: '/Ilan-Bluestone_Group-Therapy-450-Live-At-The-Drumsheds.mp4',
      pagination: 'ABGT 450',
    },
    {
      title: 'Tour Schedule',
      subtitle: 'Find out if ilan Bluestone is performing at a venue near you',
      linkText: 'Tour Schedule',
      linkUrl: '/tour',
      media: '/Above-and-Beyond-Steelyard-26th-May-2018-by-Luke-Dyson-IMG-1114.jpg',
      pagination: 'Tour Schedule'
    },
    {
      title: 'To night Feat. El Waves',
      linkText: 'Out Now!!',
      linkUrl: 'https://anjunabeats.ffm.to/ibelwtnt.gcn',
      external: true,
      media: '/Tonight-Ilan-Bluestone.jpg',
      pagination: 'New single'
    },
  ]

  const renderSlides = () => (
    <SplideTrack>
      {slides.map(({ title, subtitle, linkText, linkUrl, media, external }, index) => (
        <SplideSlide key={index} className={`splide__slide__${index}`}>
          {media.endsWith('.mp4') ? 
            (
              <>
                {/* onCanPlay={this.muted=`${isMuted}`} */}
                <video ref={videoRef} autoPlay muted={isMuted} loop id={`splide__video__${index}`} className="splide__video">
                  <source src={media} type="video/mp4" />
                </video>
              </>
            ) 
            : 
            (
              <Image 
                src={media} 
                alt={title} 
                fill
                sizes='100vw'
                priority={index === 0}
              />
            )
          }
          
          <div className='container'>
            <h2>{title}</h2>
            {subtitle && (<p>{subtitle}</p>)}
            <p><Link href={linkUrl} target={external && `_blank`}>{linkText}</Link></p>
            {media.endsWith('.mp4') && (
              <div className="sliderButtons">
                <button onClick={togglePlayPause}>
                  <span className={clsx(`play`, isPlaying ? `playing` : `paused`)} />
                </button>
                <button onClick={toggleMute}>
                  <span className={clsx('mute', isMuted ? `muted` : `unmuted`)} />
                </button>
                {/* <button onClick={toggleFullscreen}>
                  <span className="fullscreen" />
                </button> */}
              </div>
            )}
          </div>
        </SplideSlide>
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

  // const fallback = slides[0].media
  // console.log(fallback)

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