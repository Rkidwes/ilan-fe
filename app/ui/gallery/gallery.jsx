// import Lightbox from "yet-another-react-lightbox";

"use client";

import { useState } from 'react';

import Lightbox from '../lightbox/lightbox'

import styles from "./gallery.module.scss"

import Image from "next/image";

const photos = [{
  src: '/Impulse-Ilan-Bluestone.jpg',
  alt: 'Test alt'
},
  
{
  src: '/Above-and-Beyond-Steelyard-26th-May-2018-by-Luke-Dyson-IMG-1114.jpg',
  alt: 'Antoher test'
},
 {
  src: '/Futuro.jpeg',
  alt: 'This is a third test'
 },
 {
  src: '/Tour-Shows-Ilan-Bluestone.jpg',
  alt: 'This is a third test'
 },
 {
  src: '/Tour-Shows-Ilan-Bluestone.jpg',
  alt: 'This is a third test'
 },
 {
  src: '/Tour-Shows-Ilan-Bluestone.jpg',
  alt: 'This is a third test'
 }
]

function ImageGallery() {

  // const [index, setIndex] = React.useState(-1);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageClick = (index) => {
    console.log('Current Index: ', currentImageIndex);
    console.log('Clicked Index: ', index);
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImageIndex(0);
  };

  return (
    <>
    
      <div className={styles.gallery}>

        {photos.map((image, index) => (
          <div key={index} onClick={() => handleImageClick(index)}>
            <Image src={image.src} alt={image.alt} fill sizes="(min-width: 1200px) 240px, 192px" />
          </div>
        ))}

        {/* {photos.map(({ src, alt }, index) => (
          <div key={index} onClick={() => handleImageClick(index)}>
            {console.log(index)}
            <Image
              fill
              key={index}
              src={src}
              alt={alt}
              // sizes="100vw"
              // sizes="(max-width: 420px) calc(100vw - 24px), (max-width: 1023px) calc(100vw - 48px), (max-width: 1359px) calc(960px / 4), calc(1200px / 4)"
              sizes="(min-width: 1200px) 240px, 192px"
            />
          </div>
        ))} */}
      </div>
      
      <Lightbox
        images={photos}
        isOpen={lightboxOpen}
        onRequestClose={closeLightbox}
        currentImageIndex={currentImageIndex}
      />
      
      {/* <PhotoAlbum
        layout="rows"
        photos={slides}
        targetRowHeight={150}
        onClick={({ index: current }) => setIndex(current)}
      /> */}

      {/* <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        render={{ slide: NextJsImage }}
      /> */}

      {/* <Lightbox
        index={index}
        slides={slides}
        open={index >= 0}
        close={() => setIndex(-1)}
        render={{ slide: NextJsImage }}
      /> */}
    </>
  );
}

export default ImageGallery;
