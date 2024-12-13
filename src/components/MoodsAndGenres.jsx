import { useEffect, useState } from 'react';

const MoodsAndGenres = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      const response = await fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=genres');
      const data = await response.json();
      setGenres(data.data); 
    };

    fetchGenres();
  }, []);

  return (
    <div className="section">
      <h3>Moods and Genres</h3>
      <div className="song-list">
        {genres.map((genre) => (
          <div key={genre.id} className="song-item text-center mb-3">
            <div className="d-flex flex-column align-items-center">
              <img 
                src={genre.album.cover_medium} 
                alt={genre.title} 
                style={{ width: '120px', height: '120px', objectFit: 'cover' }} 
              />
              <p className="mt-2">{genre.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoodsAndGenres;