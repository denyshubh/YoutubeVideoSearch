import React, { Component } from 'react';
import VideoItem from './common/videoItem';
import { getSearchResult } from '../services/youtubeApi';

class VideoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    }
  }
  async componentDidUpdate(prevProps) {
    if (prevProps.searchQuery !== this.props.searchQuery) {
      const videos = await getSearchResult(this.props.searchQuery)
      const selectedVideo = videos[0];
      this.setState({ videos, selectedVideo })
    }
  }

  handleClick = (video) => {
    this.setState({ selectedVideo: video });
    this.props.onItemSelect(video);
  }
  render() {
    return (
      <ul>
        {this.state.videos.map(video =>
          <VideoItem
            key={video.id.videoId}
            imageUrl={video.snippet.thumbnails.default.url}
            title={video.snippet.title}
            description={video.snippet.description}
            onClick={() => this.handleClick(video)}
            classes={video === this.state.selectedVideo ? 'list-group-item p-3 active' : 'list-group-item p-3'}
          />)}
      </ul>
    );
  }
}

export default VideoList;