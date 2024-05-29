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

function ImageGallery({ images }) {

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

        {images.map((image, index) => (
          <div key={image._id} onClick={() => handleImageClick(index)}>
            <Image src={image.image} alt={image.alt} fill sizes="(min-width: 1200px) 240px, 192px" loading='eager' />
            {image.caption && (<p>{image.caption}</p>)}
          </div>
        ))}
      </div>
      
      <Lightbox
        images={images}
        isOpen={lightboxOpen}
        onRequestClose={closeLightbox}
        currentImageIndex={currentImageIndex}
      />
    </>
  );
}

export default ImageGallery;
