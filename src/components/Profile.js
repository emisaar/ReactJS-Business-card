import React from "react"
import logo from "../img/profile.jpg"

export default function Profile() {
    return(
        <div className="profile">
            <img src={logo} alt="Profile" width="80px" className="profile-img"/>
            <h2 className="profile-h2">Emiliano Saucedo</h2>
            <h3 className="profile-h3">Software Engineer</h3>
            <hr></hr>
            <div className="profile-buttons">
                <a href="http://gmail.com"><button className="profile-button">Email</button></a>
                <a href="http://google.com"><button className="profile-button">LinkedIn</button></a>
            </div>
        </div>
    )
}