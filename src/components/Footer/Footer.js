import React from "react";
import { Link } from "react-router-dom";
import  '../../components/Footer/Footer.css';

const Footer = () => {
    return(
         <div className="main-footer">
             <div className="container">
                <div className="raw">
                    <div className="col">
                        <h4>Follow US On</h4>
                        <img src="/img/fb.png" alt=""/>
                        <img src="/img/twitter.png" alt=""/>
                        <img src="img/linkedin.png" alt=""/>
                    </div>

                    <div className="col">
                        <h4>Quick Links</h4>
                        <ul className="list-unstyled">
                            <li>Payment History</li>
                            <li>Investment Plan</li>
                            <li>Promote Your Business</li>
                            <li>Help & Support</li>
                        </ul>
                    </div>

                    <div className="col">
                        <h4>Reviews & Ratings</h4>
                        <img src='https://aws1.discourse-cdn.com/business4/uploads/electroneum/optimized/2X/d/dd1486e45ebf3f9c6ffadccbf4cc2ff6641f59c5_2_690x286.jpeg' alt=""/>
                        
                    </div>
                    
                </div>

                <hr />

                <div className="row">
                    <p className="col-sm">
                        POWERED BY <span>SENTURA TECHNOLOGIES</span>
                    </p>
                </div>

                <div className="row-two">
                   <h4>ALL RIGHTS RESERVED @ 2022</h4>
                </div>
             </div>
             {/* <section className="footer-subscription">

             </section>

             
             <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Follow Us </h2>
                        <img src="/img/fb.png" alt=""/>
                        <img src="/img/twitter.png" alt=""/>
                        <img src="img/linkedin.png" alt=""/>
                    </div>
                    <div className="footer-link-items">
                    <h2>Quick Links</h2>
                    <Link to='/'>Payment History</Link>
                    <Link to='/'>Investment Plan</Link>
                    <Link to='/'>Promote Your Business</Link>
                    <Link to='/'>Help & Support</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Review & Ratings</h2>
                        <img src="/img/download.png" alt=""/> 
                    </div>
                    </div>
             </div>
            
             <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to='/' className="social-logo">
                            Wave90 <i className="fab fa-typo3"/>
                        </Link>
                    </div>
                    <hr  style={{
                        color: '#000000',
                        backgroundColor: '#000000',
                        height: 1,
                        borderColor : '#000000'
                    }}/>
                    <small className="website-rights">ALL RIGHTS RESERVED@2022</small>
                    <div className="social-icons">
                        <Link
                        className="social-icon-link facebook"
                        to='/'
                        target='_blank'
                        >
                        <i className="fab fa-facebook-f"></i>
                        </Link>

                        <Link
                        className="social-icon-link twitter"
                        to='/'
                        target='_blank'
                        >
                        <i className="fab fa-twitter"></i>
                        </Link>

                        <Link
                        className="social-icon-link linkedin"
                        to='/'
                        target='_blank'
                        >
                        <i className="fab fa-linkedin"></i>
                        </Link>
                        
                    </div>
                </div>
             </section> */}

         </div>
    )
}

export default Footer;