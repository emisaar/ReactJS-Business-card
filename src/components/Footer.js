import React from "react"
import tw_logo from "../img/twitter-logo.png"
import fb_logo from "../img/facebook-logo.png"
import ig_logo from "../img/instagram-logo.png"
import gh_logo from "../img/github-logo.png"

export default function Footer() {
   return(
    <div className="footer">
        <div className="footer-row">
            <div className="footer-column">
                <a href="http://twitter.com">
                    <img className="footer-img" src={tw_logo} alt="Twitter"/>
                </a>
            </div>
            <div className="footer-column">
                <a href="http://facebook.com">
                    <img className="footer-img" src={fb_logo} alt="Facebook"/>
                </a>
            </div>
            <div className="footer-column">
                <a href="http://instagram.com">
                    <img className="footer-img" src={ig_logo} alt="Instagram"/>
                </a>
            </div>
            <div className="footer-column">
                <a href="http://github.com">
                    <img className="footer-img" src={gh_logo} alt="GitHub"/>
                </a>
            </div>
        </div>
   </div>
   )
}