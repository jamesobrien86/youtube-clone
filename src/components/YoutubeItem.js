import React from 'react';
import './YoutubeItem.css'

const YoutubeItem = ({video, onSelectVideo}) => {
    return(
        <div onClick={() => onSelectVideo(video)} key={video.id} className="youtube-item item" >
            <img className="ui image" src={video.snippet.thumbnails.medium.url} />
            <div className="content">
                <div className="header">
                    {video.snippet.title}
                </div>
            </div>
        </div>
    )
}

export default YoutubeItem;