//Packages
import React from 'react';
//CSS stylesheets
import './styles.css';
//To display channel data using Semantic UI Grid
const ChannelDetails=(props)=>{
        return (
            <div style={{height:"260px"}} className='ui segment'>
                <div className="ui grid">
                    <div className="eight wide column">
                        <div>
                            <h3>Title:{props.title}</h3>
                            <h3>Description:{props.description}</h3>
                            <h3>Video Count:{props.videocount}</h3>
                            <h3>Views:{props.viewcount}</h3>
                            <h3>Subscribers:{props.subscribers}</h3>
                        </div> 
                    </div>
                    <div className="eight wide column">
                        <img className='channel-image' alt="Profile" src={props.thumbnail}/>
                    </div>
                    
                </div> 
            </div>
        )
}

export default ChannelDetails;


    