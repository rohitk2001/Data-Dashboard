import React from 'react';
import { FaFacebookF,FaTwitter,FaInstagram} from "react-icons/fa";
import './footer.css';

const Footer = () =>{
    return(
        <div>
            <footer className="footer" style={{marginTop:"20%"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm col-sm-4">
                            <h3>Contact</h3>
                            <div className="emailNadPhone">
                            <p>
                                    <a href="mailto:info@speedlabs.in">info@speedlabs.in </a>
                            </p>
                            <p>  
                                    <a href="tel:+912241203067">022 4120 3067</a>
                            </p>
                            <p>
                                    <a href="tel:18004198902">1800-419-8902 (Toll Free)</a>
                            </p>
                            </div>
                        </div>
                        <div className="col-sm col-sm-5">
                            <div className="row">
                                    <div className="col-sm-6">
                                        <ul className="primaryLink">
                                                <li><a href="https://www.speedlabs.in/about-us">About Us</a></li>
                                                <li><a href="https://www.speedlabs.in/courses">Courses</a></li>
                                                <li><a href="https://www.speedlabs.in/partner-network">Partners</a></li>
                                                <li><a href="https://www.speedlabs.in/pricing">Pricing</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-sm-6">
                                        <ul>
                                                <li><a href="https://www.speedlabs.in/cbse">CBSE Questions</a></li>
                                                <li><a href="https://www.speedlabs.in/icse">ICSE Questions</a></li>
                                                <li><a href="https://www.speedlabs.in/exams">Exams</a></li>
                                                <li><a href="https://www.speedlabs.in/faq">Q&amp;A</a></li>
                                                
                                        </ul>
                                    </div>
                            </div>
            
                        </div>
                        <div className="col-sm col-sm-3 align-self-end d-flex justify-content-end">
                            <p className="socialIcons">  
                                    <a style={{color:"#ffffff",fontSize:"1.125rem",fontWeight:"700",padding:"0 10px 0 0"}} rel="nofollow" href="https://www.facebook.com/speedlabsindia/" target="_blank"><FaFacebookF/></a> 
                                    <a style={{color:"#ffffff",fontSize:"1.125rem",fontWeight:"700",padding:"0 10px 0 0"}} rel="nofollow" href="https://twitter.com/SpeedLabs_India" target="_blank"><FaTwitter/></a> 
                                    <a style={{color:"#ffffff",fontSize:"1.125rem",fontWeight:"700",padding:"0 10px 0 0"}} rel="nofollow" href="https://www.instagram.com/speedlabs.india/" target="_blank"><FaInstagram/></a> 
                        
                            </p>
            
                        </div>
                </div>
                    <div className="footBot">
                        <p>© Copyright Teevra Edutech Pvt Ltd 2019 </p> 
                    </div>
                    <div className="footBotLink">
                            <div className="row">
                                <div className="col-12">
                                        <ul>
                                                <li><a href="https://www.speedlabs.in/tnc">Terms &amp; Conditions</a></li>
                                                <li><a href="https://www.speedlabs.in/privacy-policy">Privacy Policy</a></li>
                                                <li><a href="https://www.speedlabs.in/refund-policy">Refund Policy</a></li>                                          
                                        </ul>
                                </div>
                            </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;