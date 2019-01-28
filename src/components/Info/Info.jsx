import React from 'react'
import { connect } from 'react-redux';

const Info = ({ selected }) => (
  <aside>
    <h2>Info:</h2>
    <p>
      Selected hex:&nbsp;
      <span>{selected.x}</span>
      ,&nbsp;
      <span>{selected.y}</span>
      </p>
  </aside>
)

const mapStateToProps = state => {
  return {
    selected: state.rootReducer.highlighted
  }
}

export default connect(mapStateToProps)(Info)
