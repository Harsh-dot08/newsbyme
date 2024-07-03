import React, { Component } from 'react'

export default class Loader extends Component {
  render() {
    const {mode}=this.props
    return (
        <div className={`d-flex align-items-center  text-${mode === "light" ? "dark" : "light"} bg-${mode === "light" ? "light" : "dark"}`}>
  <strong>Loading...</strong>
  <div className={`spinner-border ms-auto text-${mode === "light" ? "dark" : "light"} bg-${mode === "light" ? "light" : "dark"}`} role="status" aria-hidden="true"></div>
</div>
    )
  }
}
