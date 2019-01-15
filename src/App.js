import React, { Component } from 'react';
import './App.css';
import { Header, Grid, Options, Info } from './components'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Options />
          <Grid />
          <Info />
        </main>
      </div>
    );
  }
}

export default App;
