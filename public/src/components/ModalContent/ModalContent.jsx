import React, { PureComponent, Fragment } from 'react'
import { connect } from 'react-redux'
import { toggleModal } from '../../redux/actions'
import { HexForm } from '..';

export default class ModalContent extends PureComponent {
    
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
                    {/* <HexDetails /> */}
                    <HexFormm />
                </main>
            </Fragment>
        )
    }
}