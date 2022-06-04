//Packages
import React from 'react';
//Components
import YT from './components/yt';
import Login from './components/login';
import Route from './components/route';
import Footer from './components/footer';
import VideoStats from './components/videoStats.js';
import ViewerStats from './components/viewerStats';
import SubscriptionStats from './components/subscriptionStats';
import TrafficStats from './components/trafficStats';
//App component
const App=()=>{
    return (
        <div>
            <Route path="/">
                <Login/>
                <Footer/>
            </Route>
            <Route path="/yt">
                <YT/>
            </Route>
            <Route path="/video">
                <VideoStats/>
            </Route>
            <Route path="/viewer">
                <ViewerStats/>
            </Route>
            <Route path="/subscription">
                <SubscriptionStats/>
            </Route>
            <Route path="/traffic">
                <TrafficStats/>
            </Route>

        </div>
    )
}

export default App;