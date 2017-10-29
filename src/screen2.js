import React, { Component } from 'react';

import './screen2.css';

class screen2 extends Component {
  render() {
    return (
      <div className="screen2">
        <header className="screen2-header">

          <h1 className="screen2-title">Dissent</h1>
          <h5> To the wrongs that need resistance, To the right that needs assistance, To the future in the distance, Give yourselves. 
-- Carrie Chapman Catt</h5>
        </header>

        <p className="screen2-intro">
          <h1>Write to the mayor about the issue you would like addressed</h1>

          <textarea rows="20" cols="50"></textarea>

        </p>

      </div>
    );
  }
}

export default screen2;