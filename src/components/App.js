import React from 'react';
import youtube from '../api/youtube';

import SearchBar from './SearchBar';
import YoutubeList from './YoutubeList';

class App extends React.Component{

    state = {
        videos:[],
        selectedVideo:null,
    }

    onTermSubmit = async term => {
        const response = await youtube.get('/search', {
            params:{
                q:term
            }
        });
        this.setState({videos:response.data.items})
    };

    onSelectVideo = (video) => {
        console.log('from the app', video)
    }

    render(){
        return(
            <div className="ui container">
                <SearchBar onTermSubmit={this.onTermSubmit} />
                <YoutubeList onSelectVideo={this.onSelectVideo} videos={this.state.videos} />
            </div>            
        )
    }
}

export default App;