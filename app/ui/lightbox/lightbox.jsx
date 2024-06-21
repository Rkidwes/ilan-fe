"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Modal from 'react-modal';
import clsx from 'clsx'
import styles from './lightbox.module.scss';

Modal.setAppElement('#body'); // Adjusted to bind the modal to the Next.js root element

const Lightbox = ({ images, isOpen, onRequestClose, currentImageIndex }) => {
  const [currentIndex, setCurrentIndex] = useState(currentImageIndex);

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(currentImageIndex);
    }
  }, [isOpen, currentImageIndex]);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  if (!images || images.length === 0) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <div className={styles.lightbox}>
        <button onClick={handlePrev} className={styles.navButton}>
          Previous
        </button>
        <div className={styles.imageContainer} onClick={onRequestClose}>
          <Image
            src={images[currentIndex].image}
            alt={images[currentIndex].alt || 'Image'}
            fill
          />
        </div>
        <button onClick={handleNext} className={clsx(styles.navButton, styles.navButtonNext)}>
          Next
        </button>
        <button onClick={onRequestClose} className={styles.closeButton}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
            <path fill="white" d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
          </svg>
        </button>
      </div>
    </Modal>
  );
};

export default Lightbox;