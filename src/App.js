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
            <Route path="https://62974bd55068d3162c2f1f1c--radiant-biscotti-b7b816.netlify.app/">
                <Login/>
                <Footer/>
            </Route>
            <Route path="https://62974bd55068d3162c2f1f1c--radiant-biscotti-b7b816.netlify.app/yt">
                <YT/>
            </Route>
        </div>
    )
}

export default App;