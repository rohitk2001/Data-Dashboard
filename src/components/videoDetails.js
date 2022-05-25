import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Video from './video';
import Pagination from './paginationVideo'
const apiKey = "AIzaSyAdaubdD3jJiYw82FouvAII4DRruqNNduM";
const apiUrl = "https://www.googleapis.com/youtube/v3";

let videoids = [];

const VideoDetail=(props)=>{
    const [vid,setVid] = useState([]);

    //Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(2);

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
                    let video = {
                        "id" : videoID,
                        "videotitle" : videotitle,
                        "videodescription" : videodescription,
                        "videoviewCount" : videoviewCount,
                        "videolikeCount" : videolikeCount,
                        "videocommentCount" : videocommentCount,
                        "thumbnail":thumbnail,
                        "videoplayer":videoplayer,
                        "videolink":videolink
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

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = vid.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return(
        <div>
            <div className="four column row">
                {currentPosts.map((video)=>{
                    return(
                        <div>
                            <Video video={video}/>
                        </div>
                    )
                })} 
            </div>

            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={vid.length}
                paginate={paginate}
            />
        </div>
    )
}

export default VideoDetail;



