import React, { Component } from 'react';
import albumData from './../data/albums';

class Album extends Component {
  constructor(props) {
    super(props);
        const album = albumData.find( album => {
          return album.slug === this.props.match.params.slug
        });

        this.state = {
          album: album
        };
  }

  render() {
    return (
      <section className="album">
        <section id="album-info">
          <img id="album-cover-art" />
          <div className="album-details">
            <h1 id="album-title"></h1>
            <h2 className="artist"></h2>
            <div id="release-info"></div>
          </div>
        </section>
      </section>
    );
  }
}

export default Album;
