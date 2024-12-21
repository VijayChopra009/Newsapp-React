import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import Error from "./Error";
import InfiniteScroll from "react-infinite-scroll-component";


export default class News extends Component {
  static defaultProps = {
    country: "us",
    pageSize: 8,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  capitalWord=(word)=>{
      return word.charAt().toUpperCase()+word.slice(1);
  }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      totalResults:0,
      page: 1,
      error:false
    };
    document.title=`React-News ${this.capitalWord(this.props.category)}`
  }

  async updateNews(){
    this.props.setProgress(10);
    try {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b505d90193bc470bb1695348a240cf8d&page=1&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedata = await data.json();
      console.log(parsedata);
      
      this.props.setProgress(30);
      this.setState({
        articles: parsedata.articles,
        totalResults: parsedata.totalResults,
        loading: false,
      });
      this.props.setProgress(60);
      if (parsedata.code === "rateLimited") {
        this.setState({
          error:true,
        });
      } 
      this.props.setProgress(100);
    }catch(e){
      console.log(e);
    }
  }
  // fetching news api url
  async componentDidMount() {
   this.updateNews();
}
// only this has to be removed after pushing code to the github
componentDidUpdate(prevProps) {
  if (prevProps.category !== this.props.category) {
    // If category changed, reset page and fetch news for the new category
    this.setState({ page: 1 }, () => {
      this.updateNews();
    });
  }
}
//scroll function to fetch more data for scroll
fetchMoreData=async ()=>{
  this.setState({page:this.state.page+1})
  try {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b505d90193bc470bb1695348a240cf8d&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedata = await data.json();
    console.log(parsedata)
    this.setState({
      articles: this.state.articles.concat(parsedata.articles),
      totalResults: parsedata.totalResults,
      loading: false,
    });
    if (parsedata.code === "rateLimited") {
      this.setState({
        loading:false,
        error:true,
      });
    } 
  }catch(e){
    console.log(e);
  }
}
  render() {
    return (
        <>
          <h3 className="text-center my-3">React News Top  {this.capitalWord(this.props.category)} Headlines</h3>
          {this.state.loading && <Spinner />}
          {this.state.error && <Error/>}
          <InfiniteScroll
          dataLength={this.state.articles}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >
          <div className="container">
          <div className="row">
            {!this.state.error &&
              this.state.articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 45) : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 120)
                          : ""
                      }
                      imageurl={element.urlToImage}
                      newsurl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
          </div>
          </div>
          </InfiniteScroll>
        </>
    );
  }
}
