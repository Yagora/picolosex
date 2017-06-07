//node_modules
import React, { Component } from 'react'
//components
import Username from './../components/Username.js';
import Question from './../containers/Question.js';
//other
import './../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Username />
      </div>
    );
  }
}

export default App;
