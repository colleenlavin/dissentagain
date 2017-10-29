import React, { Component } from 'react';

import './screen3.css';

class screen3 extends Component {
  render() {
    return (
      <div className="screen3">
        <header className="screen3-header">

          <h1 className="screen3-title">Dissent</h1>
          <h5>“For me I see the world as one big nation, where everyone in it is a citizen, so it is our responsibility to make it better.” 
― Nurudeen Ushawu</h5>
        </header>
        <p className="screen3-intro">
          <h1>Pick a picture</h1>
    
          <div className="imgHolder">
            <a href="/"><img border="0" alt="Choice #1" src="https://www.cesarsway.com/sites/newcesarsway/files/styles/large_article_preview/public/Cesars-Today-Top-Ten-Puppy-Tips.jpg?itok=T2AuVJHq" width="100" height="100" /></a>
            <span>Choice #1</span>
          </div>

          <div className="imgHolder">
            <a href="/"><img border="0" alt="Choice #1" src="https://www.cesarsway.com/sites/newcesarsway/files/styles/large_article_preview/public/Cesars-Today-Top-Ten-Puppy-Tips.jpg?itok=T2AuVJHq" width="100" height="100" /></a>
            <span>Choice #2</span>
          </div>

          <div className="imgHolder">
            <a href="/"><img border="0" alt="Choice #3" src="https://www.cesarsway.com/sites/newcesarsway/files/styles/large_article_preview/public/Cesars-Today-Top-Ten-Puppy-Tips.jpg?itok=T2AuVJHq" width="100" height="100" /></a>
            <span>
                Choice #3
            </span>
          </div>

          <div className="imgHolder">
            <a href="/"><img border="0" alt="Choice #4" src="https://www.cesarsway.com/sites/newcesarsway/files/styles/large_article_preview/public/Cesars-Today-Top-Ten-Puppy-Tips.jpg?itok=T2AuVJHq" width="100" height="100" /></a>
            <span>
                Choice #4
            </span>
          </div>

        </p>
      </div>
    );
  }
}

export default screen3;