import React, { Component } from 'react';

class PlayerBar extends Component {
  render() {
    return (
      <section className="player-bar">
        <section id="buttons">
          <button id="previous" onClick={this.props.handlePrevClick}>
            <span className="ion-skip-backward"></span>
          </button>
          <button id="play-pause" onClick={this.props.handleSongClick} >
            <span className={this.props.isPlaying ? 'ion-pause' : 'ion-play'}></span>
          </button>
          <button id="next" onClick={this.props.handleNextClick}>
            <span className="ion-skip-forward"></span>
          </button>
        </section>
        <section id="time-control">
          <span className="current-time">Current Time:{this.props.currentTime}</span>
          <input
            type="range"
            className="seek-bar"
            value={(this.props.currentTime / this.props.duration) || 0}
            max="1"
            min="0"
            step="0.01"
            onChange={this.props.handleTimeChange}
          />
          <span className="total-time">Remaining Time:{(this.props.duration)-(this.props.currentTime)}</span>
        </section>
        <section id="volume-control">
          <span className="icon ion-volume-low"></span>
          <input
            type="range"
            className="seek-bar"
            value={this.props.currentVolume}
            max="1"
            min="0"
            step="0.01"
            onChange={this.props.handleVolumeChange}
          />
          <span className="icon ion-volume-high"></span>
          <div>Volume: {this.props.currentVolume*100} % </div>
        </section>
      </section>
    );
  }
}

export default PlayerBar;
