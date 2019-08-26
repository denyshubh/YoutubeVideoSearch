import React, { Component } from 'react';

class VideoItem extends Component {
  render() {
    const { imageUrl, title, description, classes } = this.props;
    return (
      <li className={classes}>
        <div className="video-list media">
          <div className="media-left">
            <img src={imageUrl} alt="YouTube" className="media-object" />
          </div>
          <div className="media-body">
            <div className="media-heading">
              {title}
            </div>
            <p>{description}</p>
          </div>
        </div>
      </li>
    );
  }
}

export default VideoItem;