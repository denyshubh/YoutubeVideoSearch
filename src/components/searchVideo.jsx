import React from "react";

const SearchVideo = ({ value, onChange, onSubmit }) => {
  return (
    <div className='row'>
      <div className="col-8">
        <input
          type="text"
          name="query"
          className="form-control my-3"
          placeholder="Search..."
          value={value}
          onChange={e => onChange(e.currentTarget.value)}
        />
      </div>
      <div className="col">
        <button className="btn btn-primary" onClick={onSubmit}>Search</button>
      </div>
    </div>

  );
};

export default SearchVideo;