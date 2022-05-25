import React from 'react';
import axios from 'axios';
import SearchBar from "./components/searchBar";
import ChannelDetails  from './components/channelDetails';
import VideoDetail from './components/videoDetails';

const apiKey = "AIzaSyBDmqUiT8xHSSYEoQv0WCkOS1AqoN8VA2s";
const apiUrl = "https://www.googleapis.com/youtube/v3";

class App extends React.Component{
    state = {title:'NA',subscribers:0,videocount:0,views:0,description:'NA',playlistId:" ",thumbnail:" "};
    onSearchSubmit = async (term) => {
        const url = `${apiUrl}/channels?key=${apiKey}&part=snippet,contentDetails,statistics&id=${term}`;
        const response = await axios.get(url);
        const title = response.data.items[0].snippet.title;
        const description = response.data.items[0].snippet.description;
        const subscriberCount = response.data.items[0].statistics.subscriberCount;
        const videoCount = response.data.items[0].statistics.videoCount;
        const viewCount = response.data.items[0].statistics.viewCount;
        const thumbnail = response.data.items[0].snippet.thumbnails.high.url;
        const playlistId = response.data.items[0].contentDetails.relatedPlaylists.uploads;
        this.setState({
            title:title,
            subscribers:subscriberCount,
            videocount:videoCount,
            views:viewCount,
            description:description,
            playlistId:playlistId,
            thumbnail:thumbnail
        });
    }

    render(){
        return (
            <div>
                <h1 style={{textAlign:"center",fontSize:"80px"}}>YOUTUBE DASHBOARD</h1>
                <div className='ui container' style={{marginTop:"10px",width:"70%"}}>
                    <SearchBar onSubmit={this.onSearchSubmit}/>
                </div>
                <div className='ui container' style={{marginTop:"10px",width:"50%"}}>
                    <h1 style={{textAlign:"center",fontSize:"50px"}}>Channel Details</h1>
                    <ChannelDetails
                        title={this.state.title}
                        description={this.state.description}
                        subscribers={this.state.subscribers}
                        videocount={this.state.videocount}
                        viewcount={this.state.views}
                        thumbnail={this.state.thumbnail}
                    />
                </div>
                <h1 style={{marginBottom:"50px",textAlign:"center",fontSize:"50px"}}>Video Details</h1>
                <div className='ui grid'>
                    <VideoDetail id={this.state.playlistId}/>
                </div>
            </div>
        )
    }
}

export default App;