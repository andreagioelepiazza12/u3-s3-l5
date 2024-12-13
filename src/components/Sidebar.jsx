import { useState } from 'react';
import { useDispatch} from 'react-redux';
import { toggleSidebar } from '../redux/actions/actions'; 


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true); 
  const dispatch = useDispatch();

  const handleSidebarToggle = () => {
    setIsOpen(!isOpen);
    dispatch(toggleSidebar()); 
  };

  return (
    <aside className={`col col-2 ${isOpen ? 'open' : ''}`}>
      <nav className="navbar navbar-expand-md fixed-left justify-content-between" id="sidebar">
        <div className="container flex-column align-items-start">
          <a className="navbar-brand" href="index.html">
            <img
              src="logo.png"
              alt="Spotify Logo"
              width="131"
              height="40"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={handleSidebarToggle}
            aria-controls="navbarNavAltMarkup"
            aria-expanded={isOpen ? 'true' : 'false'}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <ul>
                <li>
                  <a className="nav-item nav-link d-flex align-items-center" href="#">
                    <i className="bi bi-house-door-fill"></i>&nbsp; Home
                  </a>
                </li>
                <li>
                  <a className="nav-item nav-link d-flex align-items-center" href="#">
                    <i className="bi bi-book-fill"></i>&nbsp; Your Library
                  </a>
                </li>
                <li>
                  <div className="input-group mt-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <div className="input-group-append">
                      <button className="btn btn-dark ">
                        GO
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        
        <div className="nav-btn">
          <button className="btn signup-btn" type="button">Sign Up</button>
          <button className="btn login-btn" type="button">Login</button>
          <a href="#">Cookie Policy</a> |
          <a href="#"> Privacy</a>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;