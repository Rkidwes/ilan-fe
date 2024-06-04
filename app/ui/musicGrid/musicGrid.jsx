'use client';

import MusicCard from '../musicCard/musicCard'
import { useState, useEffect } from 'react';

export default function MyComponent() {
  const [topTracks, setTopTracks] = useState([]);

  useEffect(() => {
    const fetchTopTracks = async () => {
      const response = await fetch('/api/spotify');
      const data = await response.json();
      setTopTracks(data);
    };

    fetchTopTracks();
  }, []);

  return (
    <>
      {topTracks.length > 0 ?
        (topTracks.map((item, index) => (
          <MusicCard key={index} item={item} />
        ))) :
        'Loading...'
      }
    </>
  );
}