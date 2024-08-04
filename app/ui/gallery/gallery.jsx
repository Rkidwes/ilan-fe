"use client";

import { useState } from 'react';
import Image from "next/image";
import Lightbox from '../lightbox/lightbox'
import styles from "./gallery.module.scss"

function ImageGallery({ images }) {

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
          <div key={image._key} onClick={() => handleImageClick(index)}>
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
