import { useEffect, useState } from 'react';

const Podcasts = () => {
  const [podcasts, setPodcasts] = useState([]);

  useEffect(() => {
    const fetchPodcasts = async () => {
      const response = await fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=podcasts');
      const data = await response.json();
      setPodcasts(data.data); 
    };

    fetchPodcasts();
  }, []);

  return (
    <div className="section">
      <h3>Podcasts</h3>
      <div className="song-list">
        {podcasts.map((podcast) => (
          <div key={podcast.id} className="song-item text-center mb-3">
            <div className="d-flex flex-column align-items-center">
              <img 
                src={podcast.album.cover_medium} 
                alt={podcast.title} 
                style={{ width: '120px', height: '120px', objectFit: 'cover' }} 
              />
              <p className="mt-2">{podcast.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Podcasts;