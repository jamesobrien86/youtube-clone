import React from 'react';

const YoutubeItem = ({video}) => {
    return(
        <div key={video.id} className="item" >
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