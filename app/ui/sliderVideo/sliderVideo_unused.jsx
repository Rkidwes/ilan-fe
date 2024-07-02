import React from 'react'


const SliderVideo = React.memo(function SliderVideo({ videoRef, isMuted, index, media }) {

  return (

    <video ref={videoRef} autoPlay muted={isMuted} loop id={`splide__video__${index}`} className="splide__video">
      <source src={media} type="video/mp4" />
    </video>
  );
});

export default SliderVideo;