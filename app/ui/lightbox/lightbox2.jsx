"use client"

import * as React from "react";

import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import NextJsImage from "./NextJsImage";

import Image from "next/image";

function LightBox() {

  const [index, setIndex] = React.useState(-1);

  const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const unsplashLink = (id, width, height) =>
  `https://source.unsplash.com/${id}/${width}x${height}`;

const unsplashPhotos = [
  { id: "8gVv6nxq6gY", width: 1080, height: 800 },
  { id: "Dhmn6ete6g8", width: 1080, height: 1620 },
  { id: "RkBTPqPEGDo", width: 1080, height: 720 },
  { id: "Yizrl9N_eDA", width: 1080, height: 721 },
  { id: "KG3TyFi0iTU", width: 1080, height: 1620 },
  { id: "Jztmx9yqjBw", width: 1080, height: 607 },
  { id: "-heLWtuAN3c", width: 1080, height: 608 },
  { id: "xOigCUcFdA8", width: 1080, height: 720 },
  { id: "1azAjl8FTnU", width: 1080, height: 1549 },
  { id: "ALrCdq-ui_Q", width: 1080, height: 720 },
  { id: "twukN12EN7c", width: 1080, height: 694 },
  { id: "9UjEyzA6pP4", width: 1080, height: 1620 },
  { id: "sEXGgun3ZiE", width: 1080, height: 720 },
  { id: "S-cdwrx-YuQ", width: 1080, height: 1440 },
  { id: "q-motCAvPBM", width: 1080, height: 1620 },
  { id: "Xn4L310ztMU", width: 1080, height: 810 },
  { id: "iMchCC-3_fE", width: 1080, height: 610 },
  { id: "X48pUOPKf7A", width: 1080, height: 160 },
  { id: "GbLS6YVXj0U", width: 1080, height: 810 },
  { id: "9CRd1J1rEOM", width: 1080, height: 720 },
  { id: "xKhtkhc9HbQ", width: 1080, height: 1440 },
];

const photos2 = unsplashPhotos.map((photo) => ({
  src: unsplashLink(photo.id, photo.width, photo.height),
  width: photo.width,
  height: photo.height,
  srcSet: breakpoints.map((breakpoint) => {
    const height = Math.round((photo.height / photo.width) * breakpoint);
    return {
      src: unsplashLink(photo.id, breakpoint, height),
      width: breakpoint,
      height,
    };
  }),
}));

  const photos = [{
    src: '/Impulse-Ilan-Bluestone.jpg',
    alt: 'Test alt',
    width: 1080,
    height: 800
  },
    
  {
    src: '/Above-and-Beyond-Steelyard-26th-May-2018-by-Luke-Dyson-IMG-1114.jpg',
    alt: 'Antoher test',
    width: 1080,
    height: 800
  },
   {
    src: '/Futuro.jpeg',
    alt: 'This is a third test',
    width: 800,
    height: 800
   },
   {
    src: '/Tour-Shows-Ilan-Bluestone.jpg',
    alt: 'This is a third test',
    width: 1100,
    height: 800
   }
  ]

  // const photos = pics.map((pic) => ({
  //   src: pic.src,
  //   // width: pic.width,
  //   // height: pic.height,
  //   srcSet: breakpoints.map((breakpoint) => {
  //     // const height = Math.round((photo.height / photo.width) * breakpoint);
  //     return {
  //       src: pic.src,
  //       // width: breakpoint,
  //       // height,
  //     };
  //   })
  // }))

  return (
    <>
      {/* {console.log(photos2)}
      {console.log(photos)} */}

      {/* {newPics.map(({ src }, index) => (
        <div style={{ position: "relative" }}
        key={index}>
          <Image
            fill
            src={src}
            // placeholder={"blurDataURL" in src ? "blur" : undefined}
            alt="Test"
          />
        </div>
      ))} */}
    
      <PhotoAlbum
        layout="rows"
        photos={photos}
        renderPhoto={NextJsImage}
        defaultContainerWidth={1200}
        targetRowHeight={150}
        sizes={{ size: "1200px", 
                sizes: [
                  { viewport: "(max-width: 420px)", size: "calc(100vw - 24px)" }, 
                  { viewport: "(max-width: 1023px)", size: "calc(100vw - 48px)" }, 
                  { viewport: "(max-width: 1359px)", size: "960px" }
                ]
              }}
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

export default LightBox;
