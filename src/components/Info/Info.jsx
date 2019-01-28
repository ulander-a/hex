import React from 'react'
import { connect } from 'react-redux';
import HexForm from '../HexForm/HexForm';

const Info = ({ selected }) => (
  <aside>
    <h2>Info:</h2>
    <p>
      Selected hex:&nbsp;
      <span>{selected.x}</span>
      ,&nbsp;
      <span>{selected.y}</span>
      </p>
      <HexForm />
  </aside>
)

const mapStateToProps = state => {
  return {
    selected: state.rootReducer.highlighted
  }
}

export default connect(mapStateToProps)(Info)
