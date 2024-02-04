import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmericas, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  function handleClick() {
        navigate("/Profile");
  }
  return(
    <div id="nav-bar">
            <div id="home-button" class="left-side-nav" >
              VTMates
              </div>
            <div id="map-button">
                <FontAwesomeIcon icon={ faEarthAmericas }/>
            </div>
            <div class="right-side-nav">
                <div id="message-button" >
                    <FontAwesomeIcon icon={ faEnvelope } />
                </div>
                <div id="profile-button" onClick={handleClick}>
                    <FontAwesomeIcon icon={ faUser } />
                </div>
            </div>
            
        </div>
  )
}

export default Navbar;