import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Newsitem from './Newsitem';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Loader from './Loader';

export default class News extends Component {
  articles = [];

  constructor(props) {
    super(props);
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
      total: 0
    };
    this.title();
  }

  capitalizeFirstLetter = (string) => {
    if (typeof string !== 'string' || string.length === 0) {
      return '';
    }
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  title = () => {
    const { category } = this.props;
    document.title = category === "general"
      ? "NewsByMe-Your Local News Waala"
      : `${this.capitalizeFirstLetter(category)}-NewsByMe-Your Local News Waala`;
  }

  getUrl = (page) => {
    const { category, news } = this.props;
    const apiKey = "bd97bb38e38b43d498857082a348833b";
    const country = news === 'international' ? 'us' : 'in';
    return `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=20`;
  }

  fetchData = async (page) => {
    const url = this.getUrl(page);
    this.setState({ loading: true });
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      this.setState({ loading: false, articles: data.articles, total: data.totalResults, page });
    } catch (error) {
      console.error('Fetch error:', error);
      this.setState({ loading: false });
    }
  }

  componentDidMount() {
    this.fetchData(1);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.news !== this.props.news) {
      this.fetchData(1);
    }
  }

  handleNext = async () => {
    if (this.state.page + 1 <= Math.ceil(this.state.total / 20)) {
      this.fetchData(this.state.page + 1);
    }
  }

  handlePrevious = async () => {
    this.fetchData(this.state.page - 1);
  }

  render() {
    const { mode, category } = this.props;

    return (
      <>
        <div className='container my-3' style={{ backgroundColor: mode === "light" ? "white" : "black" }}>
          <h1 className='text-center' style={{ color: mode === "light" ? "black" : "white", padding: "1rem" }}>
            {category === "general" ? `NewsByMe-Today's Top Headlines` : `NewsByMe-Today's Top Headlines on ${this.capitalizeFirstLetter(category)}`}
          </h1>
          {this.state.loading && <Loader mode={mode} />}
          <div className="row">
            {!this.state.loading && this.state.articles.map((element) => (
              <div key={element.url} className="col-md-4" style={{ backgroundColor: mode === "light" ? "white" : "black" }}>
                <Newsitem title={element.title} description={element.description} image={element.urlToImage} urls={element.url} mode={mode} author={element.source.name} publish={element.publishedAt} />
              </div>
            ))}
          </div>
        </div>
        <div className='container d-flex justify-content-between'>
          <button disabled={this.state.page <= 1} type="button" className="btn btn-primary btn-sm" onClick={this.handlePrevious}>&larr; Previous</button>
          <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.total / 20)} className="btn btn-primary btn-sm" onClick={this.handleNext}>Next &rarr;</button>
        </div>
      </>
    );
  }
}

News.defaultProps = {
  category: 'general',
  news: "india",
  mode: "light"
};

News.propTypes = {
  category: PropTypes.string,
  news: PropTypes.string,
  mode: PropTypes.string
};


