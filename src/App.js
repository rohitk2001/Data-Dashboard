//Packages
import React from 'react';
//Components
import YT from './components/yt';
import Login from './components/login';
import Route from './components/route';
import Footer from './components/footer';
//App component
const App=()=>{
    return (
        <div>
            <Route path="https://speedlabsyt.netlify.app/">
                <Login/>
                <Footer/>
            </Route>
            <Route path="https://speedlabsyt.netlify.app/yt">
                <YT/>
            </Route>
        </div>
    )
}

export default App;