//Packages
import React,{useEffect} from 'react';

/*global gapi*/

const YTanalytics=()=>{
    function authenticate() {
        return gapi.auth2.getAuthInstance()
            .signIn({scope: "https://www.googleapis.com/auth/youtube https://www.googleapis.com/auth/youtube.readonly https://www.googleapis.com/auth/youtubepartner https://www.googleapis.com/auth/yt-analytics-monetary.readonly https://www.googleapis.com/auth/yt-analytics.readonly"})
            .then(function() { console.log("Sign-in successful"); },
                  function(err) { console.error("Error signing in", err); });
      }
      function loadClient() {
        //gapi.client.setApiKey("AIzaSyA9gmmtr0mn6gkKWpEr0XqR1zIG8noW34k");
        return gapi.client.load("https://youtubeanalytics.googleapis.com/$discovery/rest?version=v2")
            .then(function() { console.log("GAPI client loaded for API"); },
                  function(err) { console.error("Error loading GAPI client for API", err); });
      }
      // Make sure the client is loaded and sign-in is complete before calling this method.
      function execute() {
        return gapi.client.youtubeAnalytics.reports.query({
          "dimensions": "day",
          "endDate": "2022-01-20",
          "ids": "channel==MINE",
          "metrics": "views",
          "startDate": "2021-01-20"
        })
            .then(function(response) {
                    // Handle the results here (response.result has the parsed body).
                    console.log("Response", response);
                  },
                  function(err) { console.error("Execute error", err); });
      }
          
    useEffect(()=>{
        gapi.load("client:auth2", function() {
            gapi.auth2.init({client_id: "188479363160-034pjt294p5v01j4v2ah0prtnlr2l3ct.apps.googleusercontent.com"});
          });
    },[]);
    return (
        <div>
            <button onClick={(e)=>{authenticate(e).then(loadClient)}}>authorize and load</button>
            <button onClick={(e)=>{execute(e)}}>execute</button>
        </div>
    )
}

export default YTanalytics;