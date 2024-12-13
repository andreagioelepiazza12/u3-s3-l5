import { useEffect, useState } from 'react';

const NewReleases = () => {
  const [newReleases, setNewReleases] = useState([]);

  useEffect(() => {
    const fetchNewReleases = async () => {
      const response = await fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=new%20releases');
      const data = await response.json();
      setNewReleases(data.data); 
    };

    fetchNewReleases();
  }, []);

  return (
    <div className="section">
      <h3>New Releases</h3>
      <div className="song-list">
        {newReleases.map((release) => (
          <div key={release.id} className="song-item text-center mb-3">
            <div className="d-flex flex-column align-items-center">
              <img 
                src={release.album.cover_medium} 
                alt={release.title} 
                style={{ width: '120px', height: '120px', objectFit: 'cover' }} 
              />
              <p className="mt-2">{release.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewReleases;