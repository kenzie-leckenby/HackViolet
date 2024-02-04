import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function DirectMsg() {
    const navigate = useNavigate();

    return(
        <div class="message" onClick={() => navigate('/messages/sampleuser1')}>
            <div>
                <FontAwesomeIcon icon={ faUser } size='xl' />
                <span class="username">sampleuser1</span>
            </div>
            <div class="message-popup"><FontAwesomeIcon icon={faPaperPlane} size='xl' /></div>
        </div>
    )
}

export default DirectMsg;