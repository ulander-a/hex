import React, { PureComponent, Fragment } from 'react'
import { connect } from 'react-redux'
import { toggleModal } from '../../redux/actions'
import { HexForm, HexDetails } from '..';

class ModalContent extends PureComponent {
    state = {
        showForm: false
    }


    close = () => {
        this.props.dispatch(toggleModal(this.props.modal.isOpen))
    }

    toggleForm = () => {
        let show
        this.state.showForm === true ? show = false : show = true
        
        this.setState({
            showForm: show
        })
    }

    render() {
        return (
            <Fragment>
                <header>
                    <h1>P E P S I M A N</h1>
                    <button onClick={this.close}> X </button>
                </header>
                <main>
                    <HexDetails hex={this.props.hex} />
                    <button onClick={this.toggleForm}>Show form</button>
                    <HexForm show={this.state.showForm} hex={this.props.hex} grid={this.props.grid} />
                </main>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        hex: state.rootReducer.hex,
        grid: state.rootReducer.grid,
        modal: state.rootReducer.modal
    }
}

export default connect(mapStateToProps)(ModalContent)