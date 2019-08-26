import React, { Component } from 'react';
import './App.css';
import VideoList from './components/videoList';
import VideoPlay from './components/common/videoPlay';
import { getSearchResult } from './services/youtubeApi';
import SearchVideo from './components/searchVideo';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null,
      searchQuery: "hulk",
      sumbit: 0
    };
  }
  async componentDidUpdate() {
    if (this.state.sumbit === 1) {
      const videos = await getSearchResult(this.state.searchQuery)
      const selectedVideo = videos[0];
      this.setState({ videos, selectedVideo, sumbit: 0 })
    } else if (this.state.sumbit === 2) {
      this.setState({ sumbit: 0 })
    }
  }

  handleSearch = (query) => {
    this.setState({ searchQuery: query, selectedVideo: null });
  }

  handleVideoSelect = (video) => {
    this.setState({ selectedVideo: video, sumbit: 2 })
  }
  handleSubmit = () => {
    this.setState({ sumbit: 1 })
  }
  render() {
    const { videos, searchQuery, selectedVideo } = this.state
    console.log('hello')
    return (
      <div className="container">
        <ToastContainer />
        <SearchVideo
          value={searchQuery}
          onChange={this.handleSearch}
          onSubmit={this.handleSubmit}
        />
        <VideoPlay
          video={selectedVideo}
        />
        <VideoList
          videos={videos}
          onItemSelect={this.handleVideoSelect}
          selectedVideo={this.selectedVideo}
        />
      </div>
    );
  }
}

export default App; 