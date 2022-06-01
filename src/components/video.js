//Packages
import React,{useState} from 'react';
import axios from 'axios';
import Modal from 'react-modal';
//Components
import Pagination from './paginationComment'
import ReactPlayer from 'react-player/youtube'
//CSS stylesheet
import './styles.css'
//API credentials
const apiKey = "AIzaSyBnENzjvROf4sgs-hdKu1T9Q3mT344EVKM";

const Video=(props)=>{
    //Comments
    const [com,setComment] = useState([]);
    const [modelIsOpen,setModalIsOpen] = useState(false);
    //Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(1);
    //To get comment data based on video id
    async function requestComment(id){
            const url1 = `https://www.googleapis.com/youtube/v3/commentThreads?key=${apiKey}&textFormat=plainText&part=snippet&videoId=${id}`;//TOP LEVEL COMMENT
            await axios.get(url1)
            .then(response2=>{
                const comment = response2.data.items;
                //Store all comments of video 
                let commentdata = [];
                comment.forEach((com) => {
                    let data = {
                        name:com.snippet.topLevelComment.snippet.authorDisplayName,
                        comment:com.snippet.topLevelComment.snippet.textDisplay
                    }
                    commentdata.push(data);
                })
                setComment(commentdata);
            })
            .catch(err => {
                console.log(err);
            })   
    } 

    // Get current posts for pagination
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = com.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);
 
    if(props.video.visible === true){
        return (
            <div>
                <div className='video-container'>
                    <div>
                        {/*Video Player*/}
                        <ReactPlayer width="100%" height="200px" controls="true" url={props.video.videolink} />
                        {/*Video Statistics*/}
                        <p className='video-text'>Title: {props.video.videotitle}</p>
                        <p className='video-text' >Description: {props.video.videodescription}</p>
                        <p className='video-text' >Views: {props.video.videoviewCount}</p>
                        <p className='video-text' >Likes: {props.video.videolikeCount}</p>
                        <p className='video-text' >Comments: {props.video.videocommentCount}</p>
                        <br/>
                        <div className='button-container'>
                            <button className='button-video'>
                                <a style={{color:"black"}} href={props.video.videolink} target="_blank" rel="noopener noreferrer">Visit</a>
                            </button>
                            <button className='button-video' onClick={()=>{requestComment(props.video.id);setModalIsOpen(true);}}>
                                View Comments
                            </button>
                        </div>
                        {/*Comment Modal*/}
                        <div>
                            <Modal ariaHideApp={false} isOpen={modelIsOpen} onRequestClose={()=>setModalIsOpen(false)} style={{overlay:{backgroundColor:'grey'},content:{width:"30%",height:"70%",margin:"auto",color:'orange'}}}>
                                <h1>Comments</h1>
                                {currentPosts.map((v)=>{    
                                    return (
                                            <div className='comment'>
                                                <h2 style={{margin:"0px"}}>NAME: {v.name}</h2>
                                                <h2 style={{paddingLeft:"10px",margin:"0px"}}>COMMENT: {v.comment}</h2>
                                            </div>
                                    )            
                                })}
                                {/*Comment Pagination*/}
                                <div className='comment-page-container'>
                                    <Pagination
                                        postsPerPage={postsPerPage}
                                        totalPosts={com.length}
                                        paginate={paginate}
                                    />
                                </div>
                                <div className='comment-button-container'>
                                    <button className='button-video' onClick={()=>{setModalIsOpen(false);setComment([])}}>X</button>
                                </div> 
                            </Modal>     
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Video;
