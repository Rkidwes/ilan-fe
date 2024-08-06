import MusicCard from '../musicCard/musicCard'

export default function MyComponent({ topTracks }) {

  return (
    <>
      {(topTracks.map((item, index) => (
        <MusicCard key={index} item={item} />
      )))}
    </>
  );
}