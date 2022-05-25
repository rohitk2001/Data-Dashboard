import React,{useState} from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import Pagination from './paginationComment'
import './styles.css'
const apiKey = "AIzaSyAdaubdD3jJiYw82FouvAII4DRruqNNduM";

const Video=(props)=>{
    const [vid,setVid] = useState([]);
    const [modelIsOpen,setModalIsOpen] = useState(false);
    //Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(1);
    async function requestComment(id){
            const url1 = `https://www.googleapis.com/youtube/v3/commentThreads?key=${apiKey}&textFormat=plainText&part=snippet&videoId=${id}`;//TOP LEVEL COMMENT
            await axios.get(url1)
            .then(response2=>{
                const comment = response2.data.items;
                //Prints all comments of video
                let commentdata = [];
                comment.forEach((com) => {
                    let data = {
                        name:com.snippet.topLevelComment.snippet.authorDisplayName,
                        comment:com.snippet.topLevelComment.snippet.textDisplay
                    }
                    commentdata.push(data);
                })
                setVid(commentdata);
            })
            .catch(err => {
                console.log(err);
            })   
    } 
    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = vid.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div>
            <div className="ui grid" style={{borderStyle:"solid",marginLeft:"300px",marginBottom:"20px",width:"1100px",height:"520px"}}>
                <div className="eight wide column">
                    <h1 >Title: {props.video.videotitle}</h1>
                    <h1 >Description: {props.video.videodescription}</h1>
                    <h1 >Views: {props.video.videoviewCount}</h1>
                    <h1 >Likes: {props.video.videolikeCount}</h1>
                    <h1 >Comments: {props.video.videocommentCount}</h1>
                    <br/>
                    <div className='button-container'>
                        <button className='button-video'>
                            <a style={{color:"black"}} href={props.video.videolink} target="_blank" rel="noreferrer">Visit</a>
                        </button>
                        <button className='button-video' onClick={()=>{requestComment(props.video.id);setModalIsOpen(true);}}>
                            View Comments
                        </button>
                    </div>
                    <div>
                        <Modal ariaHideApp={false} isOpen={modelIsOpen} onRequestClose={()=>setModalIsOpen(false)} style={{width:"700px",height:"100px",overlay:{backgroundColor:'grey'},content:{width:"700px",height:"500px",margin:"auto",color:'orange'}}}>
                            <h1>Comments</h1>
                            {currentPosts.map((v)=>{    
                                return (
                                        <div className='comment'>
                                            <h2 style={{margin:"0px"}}>NAME: {v.name}</h2>
                                            <h2 style={{paddingLeft:"10px",margin:"0px"}}>COMMENT: {v.comment}</h2>
                                        </div>
                                )            
                            })}
                            <div className='page-container'>
                                <Pagination
                                    postsPerPage={postsPerPage}
                                    totalPosts={vid.length}
                                    paginate={paginate}
                                />
                            </div>
                            <div className='comment-button-container'>
                                <button className='button-video' onClick={()=>{setModalIsOpen(false);setVid([])}}>X</button>
                            </div> 
                        </Modal>     
                    </div>
                </div>
                <div className="eight wide column">
                    <img key={props.video.id} width="500" height="200" alt="Thumbnail" src={props.video.thumbnail}/>
                    <iframe title={props.video.videotitle} width="500" height="200" src={props.video.videoplayer} allow="encrypted-media" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    )
}

export default Video;
