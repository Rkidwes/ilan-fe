'use client';

import { useState, useEffect } from 'react';
import MusicCard from '../musicCard/musicCard'

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
        (
          // <MusicCard count={10} />
          <div style={{ minHeight: '150px', display: 'flex', justifyContent: 'center', alignItems: 'center', gridColumn: 'span 2' }}>
            <h1>Fetching Ilans top tracks</h1>
          </div>
        )
      }
    </>
  );
}