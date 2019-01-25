import React from 'react'
import OptionsForm from '../OptionsForm/OptionsForm'
import './Options.css'
import {connect} from 'react-redux'
const mapStateToProps = state => {
  return { option: state.option || 'Sneed\'s seed & feed (formerly Chuck\'s)'};
};
const Options = ({ option }) => (
  <aside className="options">
    <h2>Options:</h2>
    <p>{option}</p>
    {/* <OptionsForm /> */}
  </aside>
)



export default connect(mapStateToProps)(Options)