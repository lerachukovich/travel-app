import React from 'react';
import './video.scss'

const Video = (props) => {

    return (
        <div className="video-wrapper">
            <iframe
                    className="video-content"
                    src={props.value.video_source} frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen />
        </div>
    )
}

export default Video;
