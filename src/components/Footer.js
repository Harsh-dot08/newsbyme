import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <>
        <div style={{ position: 'fixed', width: '100%', bottom: 0, zIndex: 1000 }}>
          <footer className="bg-dark text-center text-white">
            <div className="container p-1 pb-0 my-0">
              <section>
                <form action="">
                  <div className="row d-flex justify-content-between">
                    <div className="col-auto">
                      <p className="pt-1 mb-0">
                        <strong>Design and Developed by Harsh Kumar Goyal with <span style={{ color: 'red' }}>&hearts;</span></strong>
                      </p>
                    </div>
                  </div>
                </form>
              </section>
            </div>
          </footer>
        </div>
      </>
    );
  }
}






