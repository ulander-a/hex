import React, { Component } from 'react'
import OptionsForm from '../OptionsForm/OptionsForm'
import './Options.css'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  option: state.rootReducer.option
})

const Options = ({ option }) => (
  <aside className="options">
    <h2>Options:</h2>
    <p>{option}</p>
    {/* <OptionsForm /> */}
  </aside>
)

export default connect(mapStateToProps)(Options)