import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createGrid } from '../../redux/actions'
const Honeycomb = require('honeycomb-grid')

class OptionsForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      HexFactory: Honeycomb.extendHex({
        size: 50,
        orientation: 'flat',
        data: {}
      }),
      GridFactory: {},
      form: {
        name: 'nameless',
        width: 5,
        height: 5,
        shape: 'rectangle',
      }
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillMount() {
    this.setState({
      GridFactory: Honeycomb.defineGrid(this.state.HexFactory)
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    const { form } = this.state
    const grid = {
      hexes: this.state.GridFactory.rectangle({
        width: form.width,
        height: form.height
      }).map(hex => hex = {
        x: hex.x,
        y: hex.y,
        data: {
          name: 'new hex',
          terrain: 'empty'
        }
      }),
      meta: {
        name: form.name,
        width: form.width,
        height: form.height
      }
    }

    this.props.dispatch(createGrid(grid))
  }

  handleChange(e) {
    const target = e.target
    const { value, id } = target

    this.setState({
      form: {
        ...this.state.form,
        [id]: value
      }
    })

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          value={this.state.form.name}
          onChange={this.handleChange}
        ></input>
        <label htmlFor="width">Width:</label>
        <input
          id="width"
          type="number"
          value={this.state.form.width}
          onChange={this.handleChange}
        ></input>
        <label htmlFor="height">Height:</label>
        <input
          id="height"
          type="number"
          value={this.state.form.height}
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

export default connect()(OptionsForm)