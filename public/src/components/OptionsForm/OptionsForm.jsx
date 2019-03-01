import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createGrid } from '../../redux/actions'

class OptionsForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: 'nameless',
      width: this.props.width,
      height: this.props.height,
      shape: 'rectangle',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    const target = e.target
    const { value, id } = target

    this.setState({
      [id]: value
    })

  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.dispatch(createGrid(this.state))
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          value={this.state.name}
          onChange={this.handleChange}
        ></input>
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
    width: state.rootReducer.grid.width,
    height: state.rootReducer.grid.height
  }
}

export default connect(mapStateToProps)(OptionsForm)