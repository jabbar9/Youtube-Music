import React from "react";
import "./App.css";
import Songs from "./component/Songs"


const searchIcon = require("./assets/search.png")
const castIcon = require("./assets/cast.png")
const profileIcon = require("./assets/profile.gif")

const URL = "https://gist.githubusercontent.com/poudyalanil/ca84582cbeb4fc123a13290a586da925/raw/14a27bd0bcd0cd323b35ad79cf3b493dddf6216b/videos.json";

const App = () => {
  const [audios, setAudio] = React.useState([]);

  const getAudio = () =>{
    fetch(URL)
    .then(response=> response.json())
    .then(data => setAudio(data))
  }

  React.useEffect(() =>{
    getAudio();
  }, [])

  const renderContent = () =>{
    return (
      <div className="audioListCover">
        {audios.map((audio) => {
          return <Songs key={audio.id} data={audio} />
        })}
      </div>
    )
  }
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
          <div className="intro-text">
          <h2>Welcome back Abdul Jabbar</h2>
          <h4>LETS TRAVEL AROUND THE WORLD</h4>
          </div>
        </div>

        {renderContent()}
      </div>
      </div>      
    </div>
  );
};

export default App;
