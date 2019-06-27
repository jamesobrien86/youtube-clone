import React from 'react';
import YoutubeItem from './YoutubeItem';

const YoutubeList = ({videos, onSelectVideo}) => {
   const renderedList = videos.map((video,i) => {
      return(
            <YoutubeItem 
                key={i} 
                onSelectVideo={onSelectVideo} 
                video={video} 
            />
      )
    })


    //props.videos
    return(
        <div className="youtube-list ui relaxed divided list">
          {renderedList}
        </div>
    )
}

export default YoutubeList;