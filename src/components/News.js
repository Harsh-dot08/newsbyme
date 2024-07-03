import React, { Component } from 'react';
import Newsitem from './Newsitem';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Loader from './Loader';

export default class News extends Component {
  articles = [];
  
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
      total: 0
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=bd97bb38e38b43d498857082a348833b&page=1&pageSize=20`;
    this.setState({loading:true})
    let data = await fetch(url);
    let coded = await data.json();
    this.setState({ loading:false,articles: coded.articles, total: coded.totalResults });
  }

  handlenext = async () => {
    if (this.state.page + 1 <= Math.ceil(this.state.total / 20)) {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=bd97bb38e38b43d498857082a348833b&page=${this.state.page + 1}&pageSize=20`;
      this.setState({loading:true})
      let data = await fetch(url);
      let coded = await data.json();
      this.setState({
        loading:false,
        page: this.state.page + 1,
        articles: coded.articles
      });
    }
  }

  handleprevious = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=bd97bb38e38b43d498857082a348833b&page=${this.state.page - 1}&pageSize=20`;
    this.setState({loading:true})
    let data = await fetch(url);
    let coded = await data.json();
    this.setState({
      loading:false,
      page: this.state.page - 1,
      articles: coded.articles
    });
  }

  render() {
    const { mode } = this.props;

    return (
      <>
        <div className='container my-3' style={{ backgroundColor: mode === "light" ? "white" : "black" }}>
          <h1 className='text-center' style={{ color: mode === "light" ? "black" : "white" }}>Today's Top Headlines</h1>
          {this.state.loading && <Loader></Loader>}
          <div className="row">
            {!this.state.loading && this.state.articles.map((element) => {
              return (
                <div key={element.title} className="col-md-4" style={{ backgroundColor: mode === "light" ? "white" : "black" }}>
                  <Newsitem title={element.title} description={element.description} image={element.urlToImage} urls={element.url} mode={mode}></Newsitem>
                </div>
              );
            })}
          </div>
        </div>
        <div className='container d-flex justify-content-between'>
          <button disabled={this.state.page <= 1} type="button" className="btn btn-primary btn-sm" onClick={this.handleprevious}>&larr; Previous</button>
          <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.total / 20)} className="btn btn-primary btn-sm" onClick={this.handlenext}>Next &rarr;</button>
        </div>
      </>
    );
  }
}

