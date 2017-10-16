import React from 'react';

export class Homepage extends React.Component {
  render() {
    return (
      <div className="Homepage">
        <div class="container">
          <nav class="navbar navbar-default">
            <div class="container-fluid">
              <a href="/" class="btn btn-info" role="button">Homepage</a>
              <a href="/second" class="btn btn-info" role="button">Secondpage</a>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
