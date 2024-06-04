import { NextResponse } from 'next/server';
import { getAccessToken, getArtistTopTracks } from '../../lib/spotify';

export async function GET(request) {
  const accessToken = await getAccessToken();
  const artistId = '1yoZuH2j43vVSWsOwYuQyn';

  const topTracks = await getArtistTopTracks(artistId, accessToken);

  return NextResponse.json(topTracks)
}