import React from 'react'


const SliderVideo = React.memo(function SliderVideo({ videoRef, isMuted, index, media }) {
  // const [isMuted, setIsMuted] = useState(true);

  // const toggleMute = () => {
  //   setIsMuted(!isMuted);
  // };

  return (

    <video ref={videoRef} autoPlay muted={isMuted} loop id={`splide__video__${index}`} className="splide__video">
      <source src={media} type="video/mp4" />
    </video>

      // <video muted={isMuted} controls>
      //   <source src="your_video_source.mp4" type="video/mp4" />
      //   Your browser does not support the video tag.
      // </video>
      // <button onClick={toggleMute}>{isMuted ? 'Unmute' : 'Mute'}</button>
  );
});

export default SliderVideo;



// function SliderVideo = React.memo(({ videoRef, isMuted, index, media}) => {
//   return (
//     <video ref={videoRef} autoPlay muted={isMuted} loop id={`splide__video__${index}`} className="splide__video">
//       <source src={media} type="video/mp4" />
//     </video>
//   );
// )}

// export default SliderVideo;
