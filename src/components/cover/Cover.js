import React from 'react';
import './Cover.css';
import coverVideo from '../../media/coverVideo.mp4';
const Cover = () => {
    return (
        <div className='cover-container'>
            <video className='video' src={coverVideo} autoPlay loop muted/>
            <h1>Juan Cruz Vila</h1>
            <p>Desarrollador web</p>
        </div>
    );
}

export default Cover;
