import React, { Component } from 'react'
import Modal from 'react-modal'

import { Header, Grid, Options, Info, ModalContent } from '../'
import './App.css'

class App extends Component {
    render() {
        return (
            <div id="App">
                <Modal isOpen={this.state.modalIsOpen}>
                    <ModalContent />
                </Modal>
                <button onClick={this.openModal}>open modal</button>
                <Header />
                <main>
                    <Options />
                    <Grid />
                    <Info />
                </main>
            </div>
        )
    }
}

export default App