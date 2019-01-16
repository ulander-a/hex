import React, { Component } from 'react'

// redux stuff
import { Provider } from 'react-redux'
import configureStore from './configureStore'

// Move this later (turn App to a component etc)
import { Header, Grid, Options, Info } from './components'
import './App.css'

const store = configureStore()

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <main>
            <Options />
            <Grid />
            <Info />
          </main>
        </div>
      </Provider>
    );
  }
}

export default App;
