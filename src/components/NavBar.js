import React, { Component } from "react";
// import { Link } from "react-router-dom";

export default class NavBar extends Component {
  handleNavigation = (event, category) => {
    event.preventDefault(); 
    this.props.handleCategoryChange(category); 
  };
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            News App
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* Flex container to align items */}
            <ul className="navbar-nav d-flex w-100">

              {/* End-aligned items */}
              <div className="navbar-nav ms-auto d-flex">
              <li className="nav-item">
                  <a className="nav-link" href="/" onClick={(e) => this.handleNavigation(e, "general")}>
                    General
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/business" onClick={(e) => this.handleNavigation(e, "business")}>
                    Business
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/health" onClick={(e) => this.handleNavigation(e, "health")}>
                    Health
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/science" onClick={(e) => this.handleNavigation(e, "science")}>
                    Science
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/sports" onClick={(e) => this.handleNavigation(e, "sports")}>
                    Sports
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/technology" onClick={(e) => this.handleNavigation(e, "technology")}>
                    Technology
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
