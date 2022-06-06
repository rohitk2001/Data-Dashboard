//Packages
import React,{useEffect} from 'react';

/*global gapi*/

var GoogleAuth;
var SCOPE = 'https://www.googleapis.com/auth/youtube https://www.googleapis.com/auth/youtube.readonly https://www.googleapis.com/auth/youtubepartner https://www.googleapis.com/auth/yt-analytics-monetary.readonly https://www.googleapis.com/auth/yt-analytics.readonlyhttps://www.googleapis.com/auth/yt-analytics.readonly';

const YTfinal=()=>{
      function handleClientLoad() {
        // Load the API's client and auth2 modules.
        // Call the initClient function after the modules load.
        gapi.load('client:auth2', initClient);
      }
      function initClient() {
        // In practice, your app can retrieve one or more discovery documents.
        var discoveryUrl = 'https://www.googleapis.com/discovery/v1/apis/youtubeAnalytics/v1/rest';
    
        // Initialize the gapi.client object, which app uses to make API requests.
        // Get API key and client ID from API Console.
        // 'scope' field specifies space-delimited list of access scopes.
        gapi.client.init({
            'apiKey': 'AIzaSyA9gmmtr0mn6gkKWpEr0XqR1zIG8noW34k',
            'clientId': '188479363160-034pjt294p5v01j4v2ah0prtnlr2l3ct.apps.googleusercontent.com',
            'discoveryDocs': [discoveryUrl],
            'scope': SCOPE
        }).then(function () {
          GoogleAuth = gapi.auth2.getAuthInstance();
    
          // Listen for sign-in state changes.
          GoogleAuth.isSignedIn.listen(updateSigninStatus);
    
          // Handle initial sign-in state. (Determine if user is already signed in.)
          var user = GoogleAuth.currentUser.get();
          setSigninStatus();
    
          // Call handleAuthClick function when user clicks on
          //      "Sign In/Authorize" button.
          $('#sign-in-or-out-button').click(function() {
            handleAuthClick();
          });
          $('#revoke-access-button').click(function() {
            revokeAccess();
          });
        });
      }
    
      function handleAuthClick() {
        if (GoogleAuth.isSignedIn.get()) {
          // User is authorized and has clicked "Sign out" button.
          GoogleAuth.signOut();
        } else {
          // User is not signed in. Start Google auth flow.
          GoogleAuth.signIn();
        }
      }
    
      function revokeAccess() {
        GoogleAuth.disconnect();
      }
    
      function setSigninStatus() {
        var user = GoogleAuth.currentUser.get();
        var isAuthorized = user.hasGrantedScopes(SCOPE);
        if (isAuthorized) {
          $('#sign-in-or-out-button').html('Sign out');
          $('#revoke-access-button').css('display', 'inline-block');
          $('#auth-status').html('You are currently signed in and have granted ' +
              'access to this app.');
        } else {
          $('#sign-in-or-out-button').html('Sign In/Authorize');
          $('#revoke-access-button').css('display', 'none');
          $('#auth-status').html('You have not authorized this app or you are ' +
              'signed out.');
        }
      }
    
      function updateSigninStatus() {
        setSigninStatus();
      }
    return (
        <div>
            <button id="sign-in-or-out-button" onClick={(e)=>{ handleClientLoad();handleAuthClick();}}
                    style="margin-left: 25px">Sign In/Authorize
            </button>
            <button id="revoke-access-button" onClick={(e)=>{ revokeAccess();}}
                    style="display: none; margin-left: 25px">Revoke access
            </button>
            <div id="auth-status" style="display: inline; padding-left: 25px"></div>
        </div>
    )
}

export default YTfinal;

  