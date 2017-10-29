import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <h1 className="App-title">Dissent</h1>
          <h5>Show local government what you care about!</h5>
        </header>
        <p className="App-intro">
          <h1>What issues matter to you?</h1>
          <div className="imgHolder">
            <a href="/"><img border="0" alt="Pollution" src="https://www.cesarsway.com/sites/newcesarsway/files/styles/large_article_preview/public/Cesars-Today-Top-Ten-Puppy-Tips.jpg?itok=T2AuVJHq" width="100" height="100" /></a>
            <span>Pollution</span>
          </div>
          <div className="imgHolder">
            <a href="/"><img border="0" alt="Pollution" src="https://www.cesarsway.com/sites/newcesarsway/files/styles/large_article_preview/public/Cesars-Today-Top-Ten-Puppy-Tips.jpg?itok=T2AuVJHq" width="100" height="100" /></a>
            <span>Pollution</span>
          </div>
          <div className="imgHolder">
            <a href="/"><img border="0" alt="Pollution" src="https://www.cesarsway.com/sites/newcesarsway/files/styles/large_article_preview/public/Cesars-Today-Top-Ten-Puppy-Tips.jpg?itok=T2AuVJHq" width="100" height="100" /></a>
            <span>Pollution</span>
          </div>
        </p>
      </div>
    );
  }
}

export default App;
