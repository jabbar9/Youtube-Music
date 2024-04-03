import React from "react";
import "./App.css";
import Songs from "./component/Songs";
import Card from "./component/Card";
import Running from "./component/Running";
import { data } from "autoprefixer";

const searchIcon = require("./assets/search.png");
const castIcon = require("./assets/cast.png");
const profileIcon = require("./assets/profile.gif");
const leftArrow = require("./assets/left.png");
const pausebutton = require("./assets/pause.png");
const rightButton = require("./assets/right.png");

const URL =
  "https://raw.githubusercontent.com/jabbar9/Youtube-Music/main/playlist.json";

const communityURL =
  "https://raw.githubusercontent.com/jabbar9/Youtube-Music/main/community.json";

const App = () => {
  const [audios, setAudio] = React.useState([]);
  const [cards, setCard] = React.useState([]);

  const getAudio = () => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setAudio(data));
  };

  React.useEffect(() => {
    getAudio();
  }, []);

  const getCard = () => {
    fetch(communityURL)
      .then((response) => response.json())
      .then((data) => setCard(data));
  };

  React.useEffect(() => {
    getCard();
  }, []);

  const renderCard = () => {
    return (
      <div className="cardListCover">
        {cards.map((card) => {
          return <Card key={card.id} data={card} />;
        })}
      </div>
    );
  };
  const renderContent = () => {
    return (
      <div className="audioListCover">
        {audios.map((audio) => {
          return <Songs key={audio.id} data={audio} />;
        })}
      </div>
    );
  };
  const renderSong = () => {
    return (
      <div className="SongCover">
        {audios.map((audio) => {
          return <Running key={audio.id} data={audio}/>
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
            <img alt="cast" className="cast" src={castIcon} />
            <img alt="cast" className="cast" src={profileIcon} />
          </div>
        </div>

        <div className="artist-section">
          <div className="intro-section">
            <img alt="profile" className="proPhoto" src={profileIcon} />
            <div className="intro-text">
              <h2>Welcome back Abdul Jabbar</h2>
              <h4>LETS TRAVEL AROUND THE WORLD</h4>
            </div>
          </div>

          {renderContent()}

          <div className="community-section">
            <h2 className="commHeader">From the community</h2>
            {renderCard()}

            <div className="playyable-section">
              <div className="footer">
              <img alt="leftArrow" className="leftArrow" src={leftArrow}/>
              <img alt="pausePlay" className="pausePlay" src={pausebutton}/>
              <img alt="rightArrow" className="RightArrow" src={rightButton}/>
              <p className="time">0:20 / 5:20</p>
              {renderSong()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
