import React from 'react'
import { connect } from 'react-redux';
import HexForm from '../HexForm/HexForm';

const Info = ({ hex }) => (
  <aside>
    <h2>Info:</h2>
    <p>
      Selected hex:&nbsp;
      <span>{hex.coordinates.x}</span>
      ,&nbsp;
      <span>{hex.coordinates.y}</span>
    </p>
      {/* <p>Name: <span>{hex.data.name}</span></p> */}
      {/* <p>Terrain: <span>{hex.data.terrain}</span></p> */}
      <HexForm hex={hex} />
  </aside>
)

const mapStateToProps = state => {
  return {
    hex: state.rootReducer.hex
  }
}

export default connect(mapStateToProps)(Info)
