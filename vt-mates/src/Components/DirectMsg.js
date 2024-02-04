import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function DirectMsg() {
    const navigate = useNavigate();

    const username = 'sampleuser1';

    return(
        <div class="message" onClick={() => navigate(`/messages/${username}`)}>
            <div>
                <FontAwesomeIcon icon={ faUser } size='xl' />
                <span class="username">{username}</span>
            </div>
            <div class="message-popup"><FontAwesomeIcon icon={faPaperPlane} size='xl' /></div>
        </div>
    )
}

export default DirectMsg;