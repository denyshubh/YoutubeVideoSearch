import React, { Component } from 'react';
import './App.css';
import VideoList from './components/videoList';
import VideoPlay from './components/common/videoPlay';
import SearchVideo from './components/searchVideo';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedVideo: null,
      searchQuery: ""
    }
  }

  handleVideoSelect = (video) => {
    this.setState({ selectedVideo: video })
  }

  handleSubmit = (query) => {
    this.setState({ searchQuery: query })
  }

  render() {
    const { searchQuery, selectedVideo } = this.state
    return (
      <div className="container">
        <ToastContainer />
        <SearchVideo
          onSubmit={this.handleSubmit}
        />
        <VideoPlay
          video={selectedVideo}
        />
        <VideoList
          searchQuery={searchQuery}
          onItemSelect={this.handleVideoSelect}
          selectedVideo={selectedVideo}
        />
      </div>
    );
  }
}

export default App; 