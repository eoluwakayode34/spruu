import React from 'react';
import './footer.style.scss';   
import {ReactComponent as Twitter} from '../../asset/twitter.svg';
import {ReactComponent as Facebook} from '../../asset/facebook.svg';
import {ReactComponent as Instagram} from '../../asset/instagram.svg';


const Footer = () => (
    <div className="footer">
        <div className="container">
            <div className="footer-container">
        <div className="email">
               <span> spruureview@gmail.com</span>
            </div>

            <div className="copyright">
            <span>Copyright © 2020 SPRUU REVIEW. All rights reserved.</span>

            </div>

            <div className="social-link">
           <a href="https://twitter.com/SpruuReview"  className='social-link-item' target="_blank" >
               <Twitter  className='social-link-item-icon' />
           </a>
           <a href="https://www.facebook.com/SpruuReview/" className='social-link-item' target="_blank">
             <Facebook  className='social-link-item-icon' />
           </a>
           <a href="https://www.instagram.com/spruureview/" className='social-link-item'target="_blank" >
           <Instagram className='social-link-item-icon'  />
           </a>
           </div>
            </div>
            </div>
            
    </div>
)

export default Footer;