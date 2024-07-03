import React, { Component } from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedSwitch: null
    };
  }

  handleSwitchChange = (switchId) => {
    this.setState(prevState => ({
      checkedSwitch: prevState.checkedSwitch === switchId ? null : switchId
    }));
  };

  render() {
    const { checkedSwitch } = this.state;
    const { toggledark } = this.props;

    return (
      <>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
          <div className="container-fluid d-flex justify-content-evenly">
            <a className="navbar-brand" href="/">NewsByMe</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">Link</a>
                </li>
              </ul>
            </div>
            <div className={`form-check form-switch text-light`}>
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault1"
                onClick={toggledark}
                checked={checkedSwitch === 1}
                onChange={() => this.handleSwitchChange(1)}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault1"
              >
                <strong>{`${checkedSwitch === 1 ? "Disable" : "Enable"}`} Dark Mode</strong>
              </label>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

