import React, { Component } from 'react';
import './Hero.css';
import FacebookIcon from '../Assets/elements/facebook@2x.png';
import InstaIcon from '../Assets/elements/insta@2x.png';
import NetflixIcon from '../Assets/elements/netflix@2x.png';
import YoutubeIcon from '../Assets/elements/Youtube@2x.png';
import TrailerButton from './TrailerButton';

export class Hero extends Component {
  render() {
    return (
      <div className="Hero-main">
        <div className="Hero-left">
          <h1>
            Game of <br /> Thrones
          </h1>
          <h2>
            "There is only one war that matters. <br />
            The Great War. And it is here." ~ Jon Snow
          </h2>
          <TrailerButton />
        </div>
        <div className="Hero-right">
          <a
            href="http://facebook.com"
            title="Like Game of Thrones page on Facebook"
          >
            <img src={FacebookIcon} alt="Facebook page" />
          </a>
          <a
            href="http://instagram.com"
            title="Follow Game of Thrones on Instagram"
          >
            <img src={InstaIcon} alt="Instagram page" />
          </a>
          <a
            href="http://youtube.com"
            title="Subscribe to Game of Thrones channel on Youtube"
          >
            <img src={YoutubeIcon} alt="Youtube channel" />
          </a>
          <a href="http://netflix.com" title="Watch Game of Thrones on Netflix">
            <img
              className="netflix-img"
              src={NetflixIcon}
              alt="Stream on netflix"
            />
          </a>
        </div>
      </div>
    );
  }
}

export default Hero;
