import React, { Component } from 'react';

class VideoPlay extends Component {

  render() {
    const { video } = this.props;
    if (!video) {
      return <React.Fragment></React.Fragment>
    }
    const url = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
      <div className="col col-12 col-lg-8">
        <div className="embed-responsive embed-responsive-16by9 justify-content-center">
          <iframe title={video.snippet.title} className="embed-responsive-item" src={url} frameBorder="1"></iframe>
        </div>
        <div className='card p-2 '>
          <div className="card-title text-bold text-dark text-justify">{video.snippet.title}</div>
          <div className="card-body text-light text-muted text-justify">
            <p>{video.snippet.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default VideoPlay;