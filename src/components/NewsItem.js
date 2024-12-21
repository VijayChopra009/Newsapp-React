import React, { Component } from "react";
import img from './image/news.webp'
export default class NewsItem extends Component {
  render() {
    let { title, description, imageurl,newsurl,author,date,source} = this.props;
    return (
      <div className="my-4 mx-2">
        <div className="card" >
          <div style={{
            display:'flex',
            justifyContent:'flex-end',
            position:'absolute',
            right:'0'
          }}>
          <span className="rounded-pill bg-warning" style={{padding:'1px 5px'}}>
          {source}
          </span>
          </div>
          <img src={imageurl?imageurl:img} className="card-img-top"alt="..." />
          <div className="card-body">
            <h6 className="card-title">{title}</h6>
            <p className="card-text">{description?description:title}</p>
            <p className="card-text" ><small className="text-muted">by {author?author:"UnKnown"} on {new Date(date).toGMTString().slice(0,-3)}</small></p>
            <a href={newsurl} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm bg-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
