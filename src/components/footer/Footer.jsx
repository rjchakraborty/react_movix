import React from 'react';
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";
import ContentWrapper from '../contentWrapper/contentWrapper'
import './style.scss'

const Footer = () => {
    return (
        <footer className='footer'>
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis tempora alias architecto necessitatibus blanditiis est voluptatibus nisi tenetur, ea, culpa, qui vel ipsum modi beatae sunt repellat velit animi officia.</div>
                <div className="socialIcons">
                    <span className="icon">
                        <FaFacebookF />
                    </span>
                    <span className="icon">
                        <FaInstagram />
                    </span>
                    <span className="icon">
                        <FaTwitter />
                    </span>
                    <span className="icon">
                        <FaLinkedin />
                    </span>
                </div>
            </ContentWrapper>
        </footer>
    )
}

export default Footer