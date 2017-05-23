//node_modules
import React, { Component } from 'react';
//components
import Question from './../containers/Question.js';
//other
import './../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Question />
      </div>
    );
  }
}

export default App;
