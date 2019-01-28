import React, { Component } from 'react'
import OptionsForm from '../OptionsForm/OptionsForm'
import './Options.css'
import { connect } from 'react-redux'

const Options = () => (
  <aside className="options">
    <h2>Options:</h2>
    <OptionsForm />
  </aside>
)

export default Options