//Packages
import React,{useState,useEffect} from 'react';
import axios from 'axios';
//Components
import ChannelDetails  from './channelDetails';
import VideoDetail from './videoDetails';
import NavBar from './navBar';
//CSS stylesheets
import './styles.css'
//API credentials
const apiKey = "AIzaSyBnENzjvROf4sgs-hdKu1T9Q3mT344EVKM";
const apiUrl = "https://www.googleapis.com/youtube/v3";
const term = "UCoxIjrCyzbaTnOtZdhwxM7g";
 
//App component
const YT=()=>{
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
        /*
        setInterval(() => {
            searchSubmit();
        }, 1000); // 10 min
        */
    },[])
    //Main stucture of Dashboard
    return (
        <div className='yellow-background'>
            <NavBar/>
            <iframe style={{marginLeft:"40%"}} height="90px" width="300px" frameborder="0" src={`https://socialcounts.org/youtube-live-subscriber-count/${term}/embed`} allowFullScreen></iframe>
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
                {/*Passing Playlist ID to make API call to get videos*/}
                <VideoDetail id={playlistId}/>
            </div>
        </div>
    )
}

export default YT;