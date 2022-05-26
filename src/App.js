import React,{useState,useEffect} from 'react';
import axios from 'axios';
import ChannelDetails  from './components/channelDetails';
import VideoDetail from './components/videoDetails';
import './components/styles.css'

const apiKey = "AIzaSyBDmqUiT8xHSSYEoQv0WCkOS1AqoN8VA2s";
const apiUrl = "https://www.googleapis.com/youtube/v3";
const term = "UCoxIjrCyzbaTnOtZdhwxM7g";
 
const App=()=>{
    const [title,setTitle] = useState('NA');
    const [subscribers,setSubscribers] = useState(0);
    const [videocount,setVideoCount] = useState(0);
    const [views,setViewCount] = useState(0);
    const [description,setDescription] = useState('NA');
    const [playlistId,setPlaylistID] = useState(' ');
    const [thumbnail,setThumbnail] = useState(' ');

    useEffect(()=>{
        async function searchSubmit(){
            const url = `${apiUrl}/channels?key=${apiKey}&part=snippet,contentDetails,statistics&id=${term}`;
            const response = await axios.get(url);
            const title = response.data.items[0].snippet.title;
            const description = response.data.items[0].snippet.description;
            const subscriberCount = response.data.items[0].statistics.subscriberCount;
            const videoCount = response.data.items[0].statistics.videoCount;
            const viewCount = response.data.items[0].statistics.viewCount;
            const thumbnail = response.data.items[0].snippet.thumbnails.high.url;
            const playlistId = response.data.items[0].contentDetails.relatedPlaylists.uploads;
    
            setTitle(title);
            setSubscribers(subscriberCount);
            setVideoCount(videoCount);
            setViewCount(viewCount);
            setDescription(description);
            setPlaylistID(playlistId);
            setThumbnail(thumbnail);
        }
        searchSubmit();
    },[])

        return (
            <div>
                <h1 className='heading'>YOUTUBE DASHBOARD</h1>
                <div className='ui container channel-container'>
                    <h1 className='channel-heading'>Channel Details</h1>
                    <ChannelDetails
                        title={title}
                        description={description}
                        subscribers={subscribers}
                        videocount={videocount}
                        viewcount={views}
                        thumbnail={thumbnail}
                    />
                </div>
                <VideoDetail id={playlistId}/>
            </div>
        )
}

export default App;