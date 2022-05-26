import React, { useState, useEffect } from 'react';


const Search = (props) => {
  const [term, setTerm] = useState('');

  useEffect(() => {
    const search = () => {
        const value = term.toLowerCase();
        props.data.forEach(video=>{
            const isVisible = video.videotitle.toLowerCase().includes(value);
            console.log("Term:" + value + "Video Title:" + video.videotitle.toLowerCase() + "Check:" + isVisible);
            //video.element.classList.toggle("hide",!isVisible);
        })
    }
    search();
  }, [term]);

  return (
    <div className='ui container' style={{marginTop:"10px",width:"70%"}}>
      <div className="ui form" style={{marginTop:"2%",marginLeft:"7.5%",width:"100%"}}>
        <div className="field">
          <label style={{fontSize:"30px"}}>Enter Search Term</label>
          <input
            style={{margin:"auto",height:"50px"}}
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
