//Packages
import React,{useEffect,useState} from 'react';
import jwt_decode from "jwt-decode";
import axios from 'axios';
const {google} = require('googleapis');


const GoogleLogin=()=>{
    const [user,setUser] = useState({});

    async function handleCallbackResponse(response){
        
        //var userObject = jwt_decode(response.credential);
        //console.log(userObject);
        //console.log(response.credential);

        /*const oauth2Client = new google.auth.OAuth2(
            YOUR_CLIENT_ID,
            YOUR_CLIENT_SECRET,
            YOUR_REDIRECT_URL
        );

        let q = response.credential;
        // Get access and refresh tokens (if access_type is offline)
        let { tokens } = await oauth2Client.getToken(q.code);
        oauth2Client.setCredentials(tokens);*/


        /*var axios = require("axios").default;

        var options = {
            method: 'POST',
            url: 'https://YOUR_DOMAIN/oauth/token',
            headers: {'content-type': 'application/x-www-form-urlencoded'},
            data: {
                grant_type: 'client_credentials',
                client_id: '188479363160-034pjt294p5v01j4v2ah0prtnlr2l3ct.apps.googleusercontent.com',
                client_secret: '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',
                audience: 'YOUR_API_IDENTIFIER'
            }
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });*/

        /*setUser(userObject);
        document.getElementById("signInDiv").hidden=true;
        const url = `https://youtubeanalytics.googleapis.com/v2/reports?dimensions=day&endDate=2022-01-20&ids=UCoxIjrCyzbaTnOtZdhwxM7g&metrics=views&startDate=2021-01-20&key=AIzaSyA9gmmtr0mn6gkKWpEr0XqR1zIG8noW34k`;
        const oauthid = response.credential;
        const res = await axios.get(url,{
            headers: {
                Authorization: `Bearer ${oauthid}`,
                Accept: 'application/json'
                //Authorization: 'Bearer ' + token //the token is a variable which holds the token
              }
        });
        console.log(res);*/
    }

    function handleSignOut(event){
        setUser({});
        document.getElementById("signInDiv").hidden=false;
    }
          
    useEffect(()=>{
        /*global google*/
        google.accounts.id.initialize({
            client_id: "188479363160-cjd14nrqvk8l0uu8114kbdhlprnd0fo6.apps.googleusercontent.com",
            callback: handleCallbackResponse
        });

        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            { theme:"outline",size:"large"}
        )
        google.accounts.id.prompt();
    },[]);
    return (
        <div>
            <div id="signInDiv"></div>
            {Object.keys(user).length !== 0  &&
                <button onClick={(e)=>{handleSignOut(e)}}>Sign Out</button>
            }
            {user &&
                <div>
                    <h3>{user.name}</h3>
                </div>
            }
        </div>
    )
}

export default GoogleLogin;