import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentSong } from '../redux/actions/actions';

const Discover = () => {
  const [discoverSongs, setDiscoverSongs] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchDiscoverSongs = async () => {
      const response = await fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=discover');
      const data = await response.json();
      setDiscoverSongs(data.data); 
    };

    fetchDiscoverSongs();
  }, []);

  const handlePlay = (song) => {
    dispatch(setCurrentSong(song)); 
  };

  return (
    <div className="section">
      <h3>Discover</h3>
      <div className="song-list">
        {discoverSongs.map((song) => (
          <div key={song.id} className="song-item text-center mb-3">
            <div className="d-flex flex-column align-items-center">
              <img 
                src={song.album.cover_medium} 
                alt={song.title} 
                style={{ width: '120px', height: '120px', objectFit: 'cover' }} 
              />
              <p className="mt-2">{song.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Discover;