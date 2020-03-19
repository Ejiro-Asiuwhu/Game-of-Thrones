import React, { Component } from 'react';
import ModalVideo from 'react-modal-video';
import PlayIcon from '../Assets/elements/play_icon.png';

export class TrailerButton extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }
  render() {
    return (
      <React.Fragment>
        <ModalVideo
          channel="youtube"
          isOpen={this.state.isOpen}
          videoId="rlR4PJn8b8I"
          playlist="null"
          maxheight="10px"
          maxwidth="15px"
          theme='light'
          onClose={() => this.setState({ isOpen: false })}
        />
        <button className="cta-btn" onClick={this.openModal}>
          <span className="play-icon" role="img">
            <img src={PlayIcon} alt="play icon" />
          </span>{' '}
          <p>Watch Trailer</p>
        </button>
      </React.Fragment>
    );
  }
}

export default TrailerButton;
