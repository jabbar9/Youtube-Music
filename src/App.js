import React from "react";
import "./App.css";
const searchIcon = require("./assets/search.png")
const castIcon = require("./assets/cast.png")
const profileIcon = require("./assets/profile.gif")
const Temp = () => {
  return (
    <div>
      <div className="main">
        <div className="navbar">
          <p className="title">Music</p>
          <div className="navbars-section">
            <ul>
              <li>Home</li>
              <li>Explore</li>
              <li>Library</li>
              <li>Booking</li>
            </ul>
          </div>
          <div className="searchBar">            
            <img alt="play" className="searchIcon" src={searchIcon} />
            <input className="inputBar" type="text" placeholder="Search" />
          </div>
          <div className="icons">
            <img alt="cast" className="cast" src={castIcon}/>            
            <img alt="cast" className="cast" src={profileIcon}/>            
          </div>
        </div>

        <div className="artist-section">
        <div className="intro-section">
          <img alt="profile" className="proPhoto" src={profileIcon}/>
          <h1>Welcome back Abdul</h1>
          <h3>LETS TRAVEL AROUND THE WORLD</h3>
        </div>
      </div>
      </div>      
    </div>    
  );
};

export default Temp;
