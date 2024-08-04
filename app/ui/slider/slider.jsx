'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';

import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx';

import '@splidejs/react-splide/css';
import './slider.scss';

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

  useEffect(() => {
    const updateVideoSrcAttributes = () => {
      // Select all <source> elements inside <video> elements with class .splide__video
      const sourceElements = document.querySelectorAll('.splide__video source');

      sourceElements.forEach(source => {
        // Check if the source element has a data-src attribute and no src attribute
        if (source.hasAttribute('data-src') && !source.getAttribute('src')) {
          // Set the src attribute to the value of the data-src attribute
          source.setAttribute('src', source.getAttribute('data-src'));
          source.closest('video').load();
        }
      });
    };

    // Run the function to update the source elements after DOM content is loaded
    updateVideoSrcAttributes();
  }, []);

  const renderSlides = () => (
    <SplideTrack>
      {slidesArray.map((slide, index) => (
        <SplideSlide key={index} className={clsx(`splide__slide__${index}`)}>

          {slide.assetType === 'video' ?
            (
              <>
                {console.log('3333', slide.videoURL, index)}
                <video ref={videoRef} autoPlay muted={isMuted} loop className="splide__video">
                  {index === 0 ? (
                    <source src={slide.videoURL} type="video/mp4" />
                  ) : (
                    <source data-src={slide.videoURL} type="video/mp4" />
                  )}
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
    interval: 5000,
    autoplay : true,
    rewind : true,
    height: '100vh',
    lazyload: 'sequential',
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