import './App.css';
import React, { Component } from 'react';
import Navbar from './components/navbar';
import News from "./components/News";
import Footer from './components/Footer';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      mode: "light"
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

  render() {
    return (
      <div style={{ paddingBottom: '50px' }}>
        <Navbar toggledark={this.toggle}></Navbar>
        <News mode={this.state.mode}></News>
        <Footer></Footer>
      </div>
    );
  }
}


