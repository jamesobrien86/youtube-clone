import React from 'react'

const VideoDetail = ({video}) => {
   
    if(!video){
        return <div>loading...</div>
    }

    const youtubeUrl = `https://www.youtube.com/embed/${video.id.videoId}`;

    return(
        <div>
            <div className="ui embed">
                <iframe title={video.snippet.title} src={youtubeUrl} />
            </div>
            <div className="ui segment">
                <div className="ui header">{video.snippet.title}</div>
                <div className="content">{video.snippet.description}</div>
            </div>
        </div>
       
    )
}

export default VideoDetail;