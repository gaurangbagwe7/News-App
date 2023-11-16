import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component"

export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general'
  }

  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number
  }
  
  constructor(props){
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0
    }
    document.title = "Speed News | " + this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1);
  }

  async updateNews() {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json()
    this.props.setProgress(70);
    this.setState({
      articles: parsedData.articles, 
      totalResults: parsedData.totalResults,
      loading: false
    })
    this.props.setProgress(100);
  };
  

  async componentDidMount(){
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`;
    // this.setState({loading: true});
    // let data = await fetch(url);
    // let parsedData = await data.json()
    // this.setState({articles: parsedData.articles, 
    //   totalResults: parsedData.totalResults,
    //   loading: false})
    this.updateNews()
  }
  
  handlePrevClick = async ()=>{
    // this.setState({loading: true});
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page -1}&pageSize=${this.props.pageSize}`;
    // let data = await fetch(url);
    // let parsedData = await data.json()

    // this.setState({
    //   page: this.state.page -1,
    //   articles: parsedData.articles,
    //   loading: false 
    // })
    this.setState({page: this.state.page -1});
    this.updateNews();
  }
  
  handleNextClick = async ()=>{
    // if(!(this.state.page +1 > Math.ceil(this.state.totalResults/8))){
    //   this.setState({loading: true});
    //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page +1}&pageSize=${this.props.pageSize}`;
    //   let data = await fetch(url);
    //   let parsedData = await data.json()

    //   this.setState({
    //     page: this.state.page +1,
    //     articles: parsedData.articles,
    //     loading: false
    //   })
    // }
    this.setState({page: this.state.page +1});
    this.updateNews();
  }

  fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    this.setState({page: this.state.page +1})
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({
      articles: this.state.articles.concat(parsedData.articles), 
      totalResults: parsedData.totalResults})
  };

  render() {
    return (
      <>
          <h1 className='container' style={{'marginTop':'75px'}}> ⫸ Speed News - Top{" "}{this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)}{" "} Headlines{" "} </h1>
          {this.state.loading && <Spinner/>}
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.page * this.props.pageSize < this.state.totalResults}
            loader={<Spinner />}
          >
          <div className="container">
            <div className="row">
              {/* {!this.state.loading && this.state.articles.map((element) => ( */}
              {this.state.articles.map((element, index) => (
                  <div className="col-md-3" key={element.url + index}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 45) : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 80)
                          : ""
                      }
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                ))}
            </div>
          </div>
          </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" onClick={this.handlePrevClick} className="btn btn-primary ms-3">
            &larr; Previous
          </button>
          <button disabled={this.state.page + 1 >Math.ceil(this.state.totalResults / this.props.pageSize)}type="button" onClick={this.handleNextClick}className="btn btn-primary">
            Next &rarr;
          </button>
        </div> */}
      </>
    );
  }
}

export default News
