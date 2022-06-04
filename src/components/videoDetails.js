//Packages
import React,{useState,useEffect} from 'react';
import axios from 'axios';
//Components
import Video from './video';
import Pagination from './paginationVideo'
//import {Row,Col} from 'react-bootstrap';
//API credentials
const apiKey = "AIzaSyBnENzjvROf4sgs-hdKu1T9Q3mT344EVKM";
const apiUrl = "https://www.googleapis.com/youtube/v3";

//To store all the video ids response from playlist api call
let videoids = []; 

//To get all videos data
const VideoDetail=(props)=>{
    //Store video data
    const [vid,setVid] = useState([]);
    //Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(3);
    //SearchBar
    const [term, setTerm] = useState('Enter Video Name');


    useEffect(() => { 
        async function requestVideo(){
            for(const id of videoids){
                const url1 = `${apiUrl}/videos?key=${apiKey}&part=snippet,statistics,player&id=${id}`;
                await axios.get(url1)
                .then(response2=>{
                    const videoID = id;
                    const videotitle = response2.data.items[0].snippet.title;
                    const videodescription = response2.data.items[0].snippet.description;
                    const videoviewCount = response2.data.items[0].statistics.viewCount;
                    const videolikeCount = response2.data.items[0].statistics.likeCount;
                    const videocommentCount = response2.data.items[0].statistics.commentCount;
                    const thumbnail = response2.data.items[0].snippet.thumbnails.standard.url;
                    const videoplayer = "https://www.youtube.com/embed/"+ {id};
                    const videolink = `https://www.youtube.com/watch?v=${id}`;
                    const visible = true;
                    let video = {
                        "id" : videoID,
                        "videotitle" : videotitle,
                        "videodescription" : videodescription,
                        "videoviewCount" : videoviewCount,
                        "videolikeCount" : videolikeCount,
                        "videocommentCount" : videocommentCount,
                        "thumbnail":thumbnail,
                        "videoplayer":videoplayer,
                        "videolink":videolink,
                        "visible":visible
                    }
                    setVid(prevState => [...prevState, video]);
                })
                .catch(err => {
                    console.log(err);
                })
            }
        } 
        async function requestVideoPlaylist(){
            const url1 = `${apiUrl}/playlistItems?key=${apiKey}&part=snippet,contentDetails&playlistId=${props.id}`;
            await axios.get(url1)
            .then(response => {
                response.data.items.forEach((item) => {
                    videoids.push(item.contentDetails.videoId);
                })
                requestVideo();  
            })
            .catch(err => {
                console.log(err);
            })
        } 
        requestVideoPlaylist(); 
    },[props.id])    

    //Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);
    
    //Filtering video data based on search term entered by user
    var searchvideo = [];
    if(term === "" || term === "Enter Video Name"){
        searchvideo = vid;
    }else{searchvideo = vid.filter((video)=>{
        if(video.videotitle.toLowerCase().includes(term.toLowerCase())){
            return video;
        }
    })}

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = searchvideo.slice(indexOfFirstPost, indexOfLastPost);

    return(
        <div>
            {/*SearchBar*/}
            <div className='ui container' style={{marginTop:"2%",width:"100%"}}>
                <div className="ui form" style={{marginLeft:"9%",width:"85%"}}>
                    <div className="field searchbar-container">
                        <input
                            value={term}
                            onChange={(e) => setTerm(e.target.value)}
                            onClick={(e) => setTerm("")}
                            className="input searchbar"
                        />
                    </div>
                </div>
            </div>
            {/*Loop and print all video component*/}
            <div>
                <div style={{marginTop:"2%",marginLeft:"3.5%"}} className="stackable four column row">
                            {currentPosts.map((video)=>{
                                return(
                                    <div key={video.id} style={{display:"flex"}}>
                                        <Video video={video}/>
                                    </div>
                                )
                            })}  
                </div>
            </div>
            {/*To paginate video responses*/}
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={searchvideo.length}
                paginate={paginate}
            />
        </div>
    )
}

export default VideoDetail;



