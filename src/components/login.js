//Packages
import React,{useState} from 'react';
//CSS stylesheets
import './login.css';
//To display channel data using Semantic UI Grid
const Login =(props)=>{
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    return (
        <div>
            <header className='header'>
                <div className='container'>
                    <a href="https://www.speedlabs.in/" className='logo' target="_blank" rel="noopener noreferrer">
                        <img alt="SpeedLabs Logo"width="90px" height="66.68px" src="https://practice.speedlabs.in/WebV2Assets/images/logo.svg"/>
                    </a>
                </div>
            </header>
            <div style={{marginTop:"5%"}} className='container'>
                    <div style={{display:"block"}}>
                        <div className="formBox">
                            <div className="formBoxInner">
                                <div className="frmFeildSec">
                                    <div className="form-group">
                                        <span id="LabelErrorMsge" style={{color:"#FF3300"}}></span>
                                    </div>
                                    {/*MAIN LOGIC COMPONENT*/}
                                    <form className="frmGroup">
                                        <h2>Login</h2>
                                        <label className="label">Mobile Number / Email address</label>
                                        <input name="TextBoxLogin" type="text" id="TextBoxLogin" autoComplete="off" className="frmControl" aria-describedby="emailHelp" placeholder=" " 
                                            value={email}
                                            onChange={(e) => {setEmail(e.target.value);console.log(email)}}
                                            onClick={(e) => setEmail("")}
                                        />
                                        <br/>
                                        <br/>
                                        <label className="label">Password</label>
                                        <input name="TextBoxLogin" type="password" id="TextBoxLogin" autoComplete="off" className="frmControl" aria-describedby="emailHelp" placeholder=" " 
                                            value={password}
                                            onChange={(e) => {setPassword(e.target.value);console.log(password)}}
                                            onClick={(e) => setPassword("")}
                                        />
                                        <span id="LabelValidationMessage" className="errortext"></span>
                                    </form>
                                    <br/>
                                    <button className="btnPrimary btnbetween"><a style={{color:"inherit"}} href="/yt">Login</a></button> 
                                    {/*<input type="submit" name="loginContinueWithPassword" value="Login with Password" id="loginContinueWithPassword" className="btnPrimary btnbetween" />*/}
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Login;

