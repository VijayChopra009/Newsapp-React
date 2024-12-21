import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  pageSize=5;
  country="us";
  state={
    progress:0,
    currentCategory:'general'
  }
  setProgress=(progress)=>{
    this.setState({progress: progress})
  }
  handleCategoryChange =(category)=>{
    this.setState({currentCategory:category});
  }
  render() {
    return (
      <div>
        {/* <Router> */}
          <NavBar handleCategoryChange={this.handleCategoryChange}/>
          <LoadingBar
          height={3}
          color='#f11946'
          progress={this.state.progress}
        />
         <News
          setProgress={this.setProgress}
          pageSize={this.pageSize}
          key="general"
          country={this.country}
          category={this.state.currentCategory}
        />
          {/* <Routes>
            <Route exact index element={<News setProgress={this.setProgress}  pageSize={this.pageSize} key="general" country={this.country} category="general" />} />
            <Route exact path="/business" element={<News setProgress={this.setProgress} pageSize={this.pageSize} key="business" country={this.country} category="business" />} />
            <Route exact path="/health" element={<News setProgress={this.setProgress} pageSize={this.pageSize} key="health" country={this.country} category="health" />} />
            <Route exact path="/science" element={<News setProgress={this.setProgress} pageSize={this.pageSize} key="science" country={this.country} category="science" />} />
            <Route exact path="/sports" element={<News setProgress={this.setProgress} pageSize={this.pageSize} key="sports" country={this.country} category="sports" />} />
            <Route exact path="/technology" element={<News setProgress={this.setProgress} pageSize={this.pageSize} key="technology" country={this.country} category="technology" />} />
          </Routes>
        </Router> */}
      </div>
    );
  }
}
