'use client';

import React, { useRef, useState } from 'react';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import YouTube from 'react-youtube';

import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx';

import '@splidejs/react-splide/css';
import './slider.scss';

const videoOptions = {
  playerVars: { // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
    controls: 0,
    rel: 0,
    showinfo: 0
  }
};

const Slider = ({slidesArray}) => {

  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

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

  // const slides = [
  //   {
  //     title: "'Impulse', the brand new 2nd artist album",
  //     subtitle: 'Released 7th May 2021',
  //     linkText: 'Out now!!',
  //     linkUrl: 'https://anjunabeats.ffm.to/impulse.gcn',
  //     external: true,
  //     media: '/Impulse-Ilan-Bluestone.jpg',
  //     pagination: 'New Album',
  //   },
  //   {
  //     title: 'ABGT 450',
  //     subtitle: "See ilan's performance at The Drumsheds in London for ABGT 450",
  //     linkText: 'Watch The Video',
  //     linkUrl: 'https://youtu.be/0oy1aDdZWec',
  //     external: true,
  //     media: '/Ilan-Bluestone_Group-Therapy-450-Live-At-The-Drumsheds.mp4',
  //     pagination: 'ABGT 450',
  //   },
  //   {
  //     title: 'Tour Schedule',
  //     subtitle: 'Find out if ilan Bluestone is performing at a venue near you',
  //     linkText: 'Tour Schedule',
  //     linkUrl: '/tour',
  //     media: '/Above-and-Beyond-Steelyard-26th-May-2018-by-Luke-Dyson-IMG-1114.jpg',
  //     pagination: 'Tour Schedule'
  //   },
  //   {
  //     title: 'To night Feat. El Waves',
  //     linkText: 'Out Now!!',
  //     linkUrl: 'https://anjunabeats.ffm.to/ibelwtnt.gcn',
  //     external: true,
  //     media: '/Tonight-Ilan-Bluestone.jpg',
  //     pagination: 'New single'
  //   },
  // ]

  const renderSlides = () => (
    <SplideTrack>
      {slidesArray.map((slide, index) => (
        <SplideSlide key={index} className={clsx(`splide__slide__${index}`)}>

          {slide.assetType === 'video' ?
            (
              <>
                {console.log('3333', slide.videoURL)}
                <video ref={videoRef} autoPlay muted={isMuted} loop className="splide__video">
                  <source src={slide.videoURL} type="video/mp4" />
                </video>
              </>
            )
            :
            (
              <>
                <Image 
                  src={slide.imageURL} 
                  alt={slide.headline} 
                  fill
                  sizes='100vw'
                  priority={index === 0}
                  lazyload={(index === 2 || index === 3).toString()}
                />
              </>
            )
          }

          <div className='container'>
            <h2>{slide.headline}</h2>
            {slide.subtitle && (<p>{slide.subtitle}</p>)}
            <p><Link href={slide.linkURL} target={slide.external && `_blank`} rel={slide.external && 'noopener noreferrer'}>{slide.linkText}</Link></p>
            {slide.assetType === 'video' && (
              <div className="sliderButtons">
                <button onClick={togglePlayPause}>
                  <span className={clsx(`play`, isPlaying ? `playing` : `paused`)} />
                </button>
                <button onClick={toggleMute}>
                  <span className={clsx('mute', isMuted ? `muted` : `unmuted`)} />
                </button>
              </div>
            )}
          </div>

        </SplideSlide>
      ))}
    </SplideTrack>
  );

  const mainOptions = {
    type : 'slide',
    interval: 4000,
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
      
      <div className="video-container">
        <YouTube
          videoId="Z6FPJOgfCkc"
          opts={videoOptions}
          className="video-iframe"
          // onReady={this._onReady}
          // onEnd={this._onEnd}
        />
      </div>

      <div className="slider">
      {/* {console.log('Slides Array: ', slidesArray)} */}
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
              item.button.textContent = slidesArray[item.page].slideTitle
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