import { useState } from 'react';

const Player = () => {
  const [currentSong, setCurrentSong] = useState({
    title: 'Song Title',
    artist: 'Artist Name',
    albumCover: 'https://via.placeholder.com/150', 
  });

   

  
  

  return (
    <div className="container-fluid fixed-bottom bg-dark text-white pt-1">
      <div className="row h-100">
        <div className="col-lg-10 offset-lg-2">
          <div className="row h-100 flex-column justify-content-center align-items-center">
            <div className="col-6 col-md-4 playerControls">
              <div className="d-flex justify-content-between align-items-center">
               
                <a href="#" >
                  <img
                    src="shuffle.png"
                    alt="shuffle"
                    style={{ width: '30px' }}
                  />
                </a>
                
                <a href="#" >
                  <img
                    src="prev.png"
                    alt="prev"
                    style={{ width: '30px' }}
                  />
                </a>
                
                <a href="#" >
                  <img
                    src="play.png"
                    alt="play"
                    style={{ width: '30px' }}
                  />
                </a>
                
                <a href="#" >
                  <img
                    src="next.png"
                    alt="next"
                    style={{ width: '30px' }}
                  />
                </a>
                
                <a href="#" >
                  <img
                    src="repeat.png"
                    alt="repeat"
                    style={{ width: '30px' }}
                  />
                </a>
              </div>

              
              <div className="progress mt-3" style={{ height: '5px' }}>
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;