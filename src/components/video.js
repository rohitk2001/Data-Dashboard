import React,{useState} from 'react';
import axios from 'axios';
import Modal from 'react-modal';

const apiKey = "AIzaSyAdaubdD3jJiYw82FouvAII4DRruqNNduM";

const Video=(props)=>{
    const [vid,setVid] = useState([]);
    const [modelIsOpen,setModalIsOpen] = useState(false);
    async function requestComment(id){
            const url1 = `https://www.googleapis.com/youtube/v3/commentThreads?key=${apiKey}&textFormat=plainText&part=snippet&videoId=${id}`;//TOP LEVEL COMMENT
            await axios.get(url1)
            .then(response2=>{
                const comment = response2.data.items;
                //Prints all comments of video
                console.log("Comment Data:")
                console.log(response2);
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
                    <div style={{position:"absolute",bottom:"0"}}>
                        <button style={{fontSize:"20px",marginRight:"5px"}}>
                            <a href={props.video.videolink} target="_blank" rel="noreferrer">Visit</a>
                        </button>
                        <button style={{fontSize:"20px"}} onClick={()=>{requestComment(props.video.id);setModalIsOpen(true);}}>View Comments</button>
                    </div>
                    <div>
                        <Modal ariaHideApp={false} isOpen={modelIsOpen} onRequestClose={()=>setModalIsOpen(false)} style={{width:"700px",height:"100px",overlay:{backgroundColor:'grey'},content:{width:"700px",height:"500px",margin:"auto",color:'orange'}}}>
                            <h1>Comments</h1>
                            {vid.map((v)=>{    
                                return (
                                        <div style={{height:"65px",width:"500px",backgroundColor:"grey",borderColor:"black",top:"25%",right:"25%"}}>
                                            <h2 style={{margin:"0px"}}>NAME: {v.name}</h2>
                                            <h2 style={{paddingLeft:"10px",margin:"0px"}}>COMMENT: {v.comment}</h2>
                                        </div>
                                )            
                            })}
                            <div style={{position:"absolute",bottom:"0"}}>
                                <button onClick={()=>setModalIsOpen(false)}>Close</button>
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
