import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import {toggleModal} from '../../redux/actions'

class Info extends PureComponent {
  open = () => {
    this.props.dispatch(toggleModal(this.props.modal.isOpen))
  }

  render() {
    const { hex } = this.props
    return (
      <aside>
        <h2>Info:</h2>
        <p>
          Selected hex:&nbsp;
      <span>{hex.x}</span>
          ,&nbsp;
      <span>{hex.y}</span>
        </p>
        <p>Name: <span>{hex.data.name}</span></p>
        <p>Terrain: <span>{hex.data.terrain}</span></p>
        <button onClick={this.open}>More info/Edit</button>
      </aside >
    )
  }
}
const mapStateToProps = state => {
  return {
    hex: state.rootReducer.hex,
    modal: state.rootReducer.modal
  }
}

export default connect(mapStateToProps)(Info)
