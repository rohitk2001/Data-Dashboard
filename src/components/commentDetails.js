import React,{useState} from 'react';
import axios from 'axios';

let commentdata = [];
const apiKey = "AIzaSyAdaubdD3jJiYw82FouvAII4DRruqNNduM";

const CommentDetails=(props)=>{
        const [popup,setPop] = useState(false);
        const closePopup=()=>{
            setPop(false);
        }
        function getComments(id){
            async function requestComment(){
                const url1 = `https://www.googleapis.com/youtube/v3/commentThreads?key=${apiKey}&textFormat=plainText&part=snippet&videoId=${id}`;//TOP LEVEL COMMENT
                await axios.get(url1)
                .then(response2=>{
                    const comment = response2.data.items;
                    //Prints all comments of video
                    comment.forEach((com) => {
                        let data = {
                            name:com.snippet.topLevelComment.snippet.authorDisplayName,
                            comment:com.snippet.topLevelComment.snippet.textDisplay
                        }
                        commentdata.push(data);
                    })
                    commentdata=[];
                })
                .catch(err => {
                    console.log(err);
                })
            } 
            requestComment();   
        }
        getComments(props.id)
        return (
            <div>
                {popup?
                    <div className='main'>
                            <div className='popup'>
                                <div className='popup-header'>
                                    <h1>popup</h1>
                                    <h1 onClick={closePopup}>X</h1>
                                </div>
                            </div>
                    </div>
                :""}
            </div>
        )
}

export default CommentDetails;


    