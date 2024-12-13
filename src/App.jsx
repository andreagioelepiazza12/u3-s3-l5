import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './components/Sidebar';
import Player from './components/Player';
import Trending from './components/Trending';  
import Podcasts from './components/Podcasts';  
import MoodsAndGenres from './components/MoodsAndGenres';  
import NewReleases from './components/NewReleases';  
import Discover from './components/Discover';  
import './App.css'

function App() {
  

  return (
    <>
    <div className="app d-flex">
      <Sidebar /> 
      <div className="content p-3 flex-grow-1">
        
        
        
        <div>
          <Trending />
          <Podcasts />
          <MoodsAndGenres />
          <NewReleases />
          <Discover />
        </div>
      </div>
      <Player /> 
    </div>

    </>
  )
}

export default App
