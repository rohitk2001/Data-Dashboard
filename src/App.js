//Packages
import React,{useState,useEffect} from 'react';
import axios from 'axios';
//Components
import ChannelDetails  from './components/channelDetails';
import VideoDetail from './components/videoDetails';
import NavBar from './components/navBar';
//CSS stylesheets
import './components/styles.css'
//API credentials
const apiKey = "AIzaSyBDmqUiT8xHSSYEoQv0WCkOS1AqoN8VA2s";
const apiUrl = "https://www.googleapis.com/youtube/v3";
const term = "UCoxIjrCyzbaTnOtZdhwxM7g";
 
//App component
const App=()=>{
    //States to store information from API
    const [title,setTitle] = useState('NA');
    const [subscribers,setSubscribers] = useState(0);
    const [videocount,setVideoCount] = useState(0);
    const [views,setViewCount] = useState(0);
    const [description,setDescription] = useState('NA');
    const [playlistId,setPlaylistID] = useState(' ');
    const [thumbnail,setThumbnail] = useState(' ');

    //To execute as we get data from API
    useEffect(()=>{
        //To get data from API based on channel id(term)
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
    //Main stucture of Dashboard
    return (
        <div className='yellow-background'>
            <NavBar/>
            <div className='purple-background'>
                <div className='channel-container'>
                    {/*Passing data from API*/}
                    <ChannelDetails
                        title={title}
                        description={description}
                        subscribers={subscribers}
                        videocount={videocount}
                        viewcount={views}
                        thumbnail={thumbnail}
                    />
                </div>
            </div>
            <div>
                {/*Paasing Playlist ID to make API call to get videos*/}
                <VideoDetail id={playlistId}/>
            </div>
        </div>
    )
}

export default App;