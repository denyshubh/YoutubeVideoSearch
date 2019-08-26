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
      <div className='row p-2 container pl-5'>
        <div className="col-8">
          <input
            type="text"
            name="query"
            className="form-control"
            placeholder="Search..."
            value={this.state.query}
            onChange={this.handleChange}
          />
        </div>
        <div className="col">
          <button className="btn btn-primary" onClick={() => onSubmit(this.state.query)}>Search</button>
        </div>
      </div>
    );
  }
}

export default SearchVideo;