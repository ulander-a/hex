import React, { PureComponent, Fragment } from 'react'
import { connect } from 'react-redux'
import { toggleModal } from '../../redux/actions'
import { HexForm, HexDetails } from '..';

class ModalContent extends PureComponent {
    
    close = () => {
        this.props.dispatch(toggleModal(this.props.modal.isOpen))
    }

    render() {
        const pepsistyle = {
            fontSize: '72px',
            background: '-webkit-linear-gradient(#ff0, #fff, #220)',
            backgroundClip: 'text',
            textFillColor: 'transparent'
        }
        return (
            <Fragment>
                <header>
                    <h1 style={pepsistyle}>P E P S I M A N</h1>
                    <button onClick={this.close}></button>
                </header>
                <main>
                    <HexDetails hex={this.props.hex} />
                    <HexForm hex={this.props.hex} grid={this.props.grid} />
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