import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmericas, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  return(
    <div id="nav-bar">
            <div id="home-button" class="left-side-nav" onClick={() => navigate('/')}>
              VTMates
              </div>
            <div id="map-button" onClick={() => navigate('/Map')}>
                <FontAwesomeIcon icon={ faEarthAmericas }/>
            </div>
            <div class="right-side-nav">
                <div id="message-button" onClick={() => navigate('/Messages')}>
                    <FontAwesomeIcon icon={ faEnvelope } />
                </div>
                <div id="profile-button" onClick={() => navigate('/Profile/SignIn')}>
                    <FontAwesomeIcon icon={ faUser } />
                </div>
            </div>
            
        </div>
  )
}

export default Navbar;