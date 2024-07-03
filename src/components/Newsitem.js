import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Newsitem extends Component {
  render() {
    let { title, description, image, urls, mode } = this.props;
    return (
      <div className="card" style={{ width: '18rem',
        backgroundColor: mode === "light" ? "white" : "black",
        color: mode === "light" ? "black" : "white" }}>
        <img 
          src={image ? image : "https://asfar.in/wp-content/uploads/2024/06/news.jpg"} 
          className="card-img-top" 
          alt="News" 
        />
        <div className="card-body">
          <h5 className="card-title">{title ? `${title.slice(0, 45)}...` : "Click on read more to know more"}...</h5>
          <p className="card-text">{description ? `${description.slice(0, 88)}...` : "Click on Read More to know more"}</p>
          <a href={urls} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">
            Read More
          </a>
        </div>
      </div>
    );
  }
}


