import React from 'react'

import { Header, Grid, Options, Info } from '../'
import './App.css'

const App = () => (
    <div className="App">
        <Header />
        <main>
            <Options />
            <Grid />
            <Info />
        </main>
    </div>
)

export default App