import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';


function App() {
  return (
    <div id="nav-bar">
            <div id="home-button" class="left-side-nav">VTMates</div>
            <div id="map-button">
                <FontAwesomeIcon icon={ faEarthAmericas }/>
            </div>
            <div class="right-side-nav">
                <div id="message-button">
                    <FontAwesomeIcon icon={ faEnvelope } />
                </div>
                <div id="profile-button">
                    <FontAwesomeIcon icon={ faUser } />
                </div>
            </div>
        </div>

        
  );
}

export default App;
