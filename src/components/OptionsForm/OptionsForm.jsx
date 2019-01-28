import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeOption, createGrid } from '../../redux/actions'

class OptionsForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      width: this.props.options.width,
      height: this.props.options.height,
      shape: 'rectangle',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    const target = e.target
    const value = target.value
    const id = target.id

    this.setState({
      [id]: value
    })

    // HMM...
  }

  handleSubmit(e) {
    const options = this.state
    e.preventDefault()
    this.props.dispatch(createGrid(options))
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="width">Width:</label>
        <input
          id="width"
          type="number"
          value={this.state.width}
          onChange={this.handleChange}
        ></input>
        <label htmlFor="height">Height:</label>
        <input
          id="height"
          type="number"
          value={this.state.height}
          onChange={this.handleChange}
        ></input>
        <label htmlFor="shape">Shape:</label>
        <select id="shape" type="number" disabled>
          <option value="rectangle">Rectangle (default)</option>
          <option value="triangle">Triangle</option>
          <option value="hexagon">Hexagon</option>
          <option value="rectangle">Parallelogram</option>
        </select>
        <button type="submit">Create</button>
      </form>
    )
  }
}

const mapStateToProps = state => {
  return {
    options: state.rootReducer.options
  }
}

export default connect(mapStateToProps)(OptionsForm)