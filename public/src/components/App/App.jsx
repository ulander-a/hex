import React, { Component } from 'react'
import { connect } from 'react-redux'
import Modal from 'react-modal'

import { Header, Grid, Options, Info, ModalContent } from '../'
import './App.css'

class App extends Component {
    render() {
        return (
            <div id="App">
                <Modal isOpen={this.props.modal.isOpen}>
                    <ModalContent />
                </Modal>
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

const mapStateToProps = state => {
    return {
        modal: state.rootReducer.modal
    }
}

export default connect(mapStateToProps)(App)