import React, { Component } from 'react';

class SearchVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
  }

  handleChange = ({ currentTarget: input }) => {
    const query = input.value;
    this.setState({ query });
  }
  render() {
    const { onSubmit } = this.props;
    return (
      <nav className="navbar navbar-dark bg-dark justify-content-between">
        <span className="navbar-brand">Youtube API</span>
        <div className="form-inline">
          <input
            type="search"
            name="query"
            className="form-control mr-sm-2"
            placeholder="Search..."
            value={this.state.query}
            onChange={this.handleChange}
          />
          <button className="btn btn-outline-primary my-2 my-sm-0" onClick={() => onSubmit(this.state.query)}>Search</button>
        </div>
      </nav>
    );
  }
}

export default SearchVideo;