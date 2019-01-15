import React, { Component } from 'react';
import './App.css';
import { Header, Grid } from './components'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Grid />
      </div>
    );
  }
}

export default App;
