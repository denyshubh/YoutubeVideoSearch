import React, { Component } from 'react';
import VideoItem from './common/videoItem';

class VideoList extends Component {
  render() {
    const { videos, onItemSelect, selectedVideo } = this.props
    return (
      <ul>
        {videos.map(video => <VideoItem
          key={video.id.videoId}
          imageUrl={video.snippet.thumbnails.default.url}
          title={video.snippet.title}
          description={video.snippet.description}
          onClick={() => onItemSelect(video)}
          classes={video === selectedVideo ? 'list-group-item p-3 active' : 'list-group-item p-3'}
        />)}
      </ul>
    );
  }
}

export default VideoList;