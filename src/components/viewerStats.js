import React,{useState,useEffect} from 'react';
//import axios from 'axios';
import NavBar from './navBar'
 
function ViewerStats() {
  //To execute as we get data from API
  useEffect(()=>{
      //To get data from API based on channel id(term)
      async function searchSubmit(){
        
      }
      console.log('rendering google signin button');
      searchSubmit();
  },[])
  return (
    <div>
      <NavBar/>
      ViewerStats
    </div>
  )
}

export default ViewerStats

