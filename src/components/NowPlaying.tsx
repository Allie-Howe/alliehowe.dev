import { useCallback, useEffect, useState } from 'react';
import playing from '../assets/playing.webm';
import spotify from '../assets/spotify.svg'
import { ClipLoader, ScaleLoader } from 'react-spinners';

type Track = {
  name: string
  artist: string
  album: string
  image: string
  url: string
  nowPlaying: boolean
  date?: Date
}

export const NowPlaying = () => {
  const [loading, setLoading] = useState(false);
  const [track, setTrack] = useState<Track>();

  const getNowPlaying = useCallback(async () => {
    setLoading(true);
    const response = await fetch('https://alliehowe-dev-backend.adaptable.app/');
    const data = await response.json();
    setLoading(false);
    setTrack({...data, date: new Date(data.date)});
  }, [])


  useEffect(() => {
    getNowPlaying();
  }, [getNowPlaying]);

  if (loading) return (<ScaleLoader loading={loading} color='white' />)

  return (<div className='mt-5'>
      {track && <>
      <div className='flex items-center justify-around w-full gap-5'>
        <div className='flex gap-2'>
        <img src={spotify} alt='Spotify logo' width='50px' />
          <div>
            <h2 className='font-sans'>{track.name}</h2>
            <h3 className='text-white font-sans'>{track.artist}</h3>
          </div>
        </div>
        <div className='flex gap-2 items-center justify-center'>
          {track.nowPlaying
            ? (<video autoPlay loop muted width='50px'>
              <source src={playing} type='video/mp4' />
            </video>)
            : <p>{track.date.toLocaleDateString()}</p>
          }
          <img src={track.image} alt='Album cover' width='100px' className='rounded-2xl' />
        </div>
      </div>
    </>}
  </div>);

};
