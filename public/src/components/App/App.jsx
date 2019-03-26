import React, { Component } from 'react'
import Modal from 'react-modal'

import { Header, Grid, Options, Info, ModalContent } from '../'
import './App.css'

class App extends Component {
    state = {
        modalIsOpen: false
    }

    openModal = () => {
        this.setState({ modalIsOpen: true })
    }

    closeModal = () => {
        this.setState({ modalIsOpen: false })
    }

    render() {
        const msg = "hello world"
        return (
            <div id="App">
                <Modal
                    isOpen={this.state.modalIsOpen}
                    contentLabel="Example modal"
                >
                    <button onClick={this.closeModal}>Close modal</button>
                    <ModalContent content={msg} />
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