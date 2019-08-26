import React, { Component } from 'react';
import './App.css';
import VideoList from './components/videoList';
import VideoPlay from './components/common/videoPlay';
import { getSearchResult, async } from './services/youtubeApi';
import SearchVideo from './components/searchVideo';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null,
      searchQuery: "hulk"
    };
  }

  async componentDidMount() {

    const videos = await getSearchResult(this.state.searchQuery)
    const selectedVideo = videos[0];
    this.setState({ videos, selectedVideo })
  }

  async componentDidUpdate() {
    const videos = await getSearchResult(this.state.searchQuery)
    const selectedVideo = videos[0];
    this.setState({ videos, selectedVideo })
  }

  handleSearch = (query) => {
    this.setState({ searchQuery: query, selectedVideo: null });
  }

  handleVideoSelect = (video) => {
    this.setState({ selectedVideo: video })
  }
  handleSubmit = ()=> {
    
  }
  render() {
    const { videos, searchQuery, selectedVideo } = this.state
    return (
      <React.Fragment>
        <SearchVideo
          value={searchQuery}
          onChange={this.handleSearch}
          onSubmit = {this.handleSubmit}
        />
        <VideoPlay
          video={selectedVideo}
        />
        <VideoList
          videos={videos}
          onItemSelect={this.handleVideoSelect}
          selectedVideo={this.selectedVideo}
        />
      </React.Fragment>
    );
  }
}

export default App; 