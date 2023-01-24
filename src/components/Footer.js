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
                    <img src={tw_logo} alt="Twitter" width="40px"/>
                </a>
            </div>
            <div className="footer-column">
                <a href="http://facebook.com">
                    <img src={fb_logo} alt="Facebook" width="40px"/>
                </a>
            </div>
            <div className="footer-column">
                <a href="http://instagram.com">
                    <img src={ig_logo} alt="Instagram" width="40px"/>
                </a>
            </div>
            <div className="footer-column">
                <a href="http://github.com">
                    <img src={gh_logo} alt="GitHub" width="40px"/>
                </a>
            </div>
        </div>
   </div>
   )
}