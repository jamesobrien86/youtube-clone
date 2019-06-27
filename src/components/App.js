import React from 'react';
import youtube from '../api/youtube';

import SearchBar from './SearchBar';
import YoutubeList from './YoutubeList';
import VideoDetail from './VideoDetail';

class App extends React.Component{

    state = {
        videos:[],
        selectedVideo:null,
    }

    componentDidMount(){
        this.onTermSubmit('awesome videos');
    }

    onTermSubmit = async term => {
        const response = await youtube.get('/search', {
            params:{
                q:term
            }
        });
        this.setState({
            videos:response.data.items,
            selectedVideo:response.data.items[0]
        })
    };

    onSelectVideo = (video) => {
        this.setState({selectedVideo:video})
    }

    render(){
        return(
            <div className="ui container">
                <SearchBar onTermSubmit={this.onTermSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <YoutubeList onSelectVideo={this.onSelectVideo} videos={this.state.videos} />
                        </div>
                    </div>
                </div>
            </div>            
        )
    }
}

export default App;