import React, { Component } from 'react';

class VideoItem extends Component {
  render() {
    const { imageUrl, title, description, onClick, classes } = this.props;
    return (
      <li className={classes} onClick={onClick}>
        <div className="card">
          <div className='row'>
            <div className="col-md-4">
              <img src={imageUrl} alt="YouTube" className="img-fluid" />
            </div>
            <div className="col">
              <div className="card-title text-capitalize text-dark p-2 text-justify">
                {title}
              </div>
              <p className="card-title text-muted pl-2 pr-2 pb-2 text-justify">{description}</p>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default VideoItem;