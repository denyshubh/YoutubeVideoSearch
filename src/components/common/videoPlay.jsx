import React, { Component } from 'react';

class VideoPlay extends Component {

  render() {
    const { video } = this.props;
    if (!video) {
      return <div>Loading ...</div>
    }
    const url = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
      <div className="video-detail col-md-8">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe title={video.snippet.title} className="embed-responsive-item" src={url} frameBorder="0"></iframe>
        </div>
        <div className='details'>
          <div>{video.snippet.title}</div>
          <div>{video.snippet.description}</div>
        </div>
      </div>
    );
  }
}

export default VideoPlay;