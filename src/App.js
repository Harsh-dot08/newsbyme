import './App.css';
import React, { Component } from 'react';
import Navbar from './components/navbar';
import News from "./components/News";
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      mode: "light",
      news: "india"
    };
  }

  toggle = () => {
    if (this.state.mode === "light") {
      document.body.style.backgroundColor = "black";
      this.setState({ mode: "dark" });
    } else {
      document.body.style.backgroundColor = "white";
      this.setState({ mode: "light" });
    }
  };

  international = () => {
    this.setState(prevState => ({
      news: prevState.news === "india" ? "international" : "india"
    }));
  };

  render() {
    return (
      <div style={{ paddingBottom: '50px' }}>
        <Router>
          <Navbar toggledark={this.toggle} newsf={this.international} news={this.state.news} />
          <Routes>
            <Route path="/science" element={<News key="science" mode={this.state.mode} news={this.state.news} category="science" />} />
            <Route path="/sports" element={<News key="sports" mode={this.state.mode} news={this.state.news} category="sports" />} />
            <Route path="/" element={<News key="general" mode={this.state.mode} news={this.state.news} category="general" />} />
            <Route path="/health" element={<News key="health" mode={this.state.mode} news={this.state.news} category="health" />} />
            <Route path="/business" element={<News  key="buisness" mode={this.state.mode} news={this.state.news} category="business" />} />
            <Route path="/entertainment" element={<News key="entertairmnet" mode={this.state.mode} news={this.state.news} category="entertainment" />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    );
  }
}




