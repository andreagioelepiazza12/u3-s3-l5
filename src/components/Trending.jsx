import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentSong } from '../redux/actions/actions';

const Trending = () => {
  const [trendingSongs, setTrendingSongs] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchTrending = async () => {
      const response = await fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=trending');
      const data = await response.json();
      setTrendingSongs(data.data); 
    };

    fetchTrending();
  }, []);

  
  const handlePlay = (song) => {
    dispatch(setCurrentSong(song)); 
  };

  return (
    <div className="section">
      <h3>Trending</h3>
      <div className="song-list">
        {trendingSongs.map((song) => (
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

export default Trending;