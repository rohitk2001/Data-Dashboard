import React from 'react';
import './styles.css';
const ChannelDetails=(props)=>{
        return (
            <div className='ui segment'>
                <div className="ui grid">
                    <div className="eight wide column">
                        <div>
                            <h1>Title:{props.title}</h1>
                            <h1>Description:{props.description}</h1>
                            <h1>Video Count:{props.videocount}</h1>
                            <h1>Views:{props.viewcount}</h1>
                            <h1>Subscribers:{props.subscribers}</h1>
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


    