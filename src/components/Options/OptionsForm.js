import React, { Component } from 'react'

export default class OptionsForm extends Component {
  render() {
    return (
      <form>
        <label for="width">Width:</label>
        <input id="width" type="number"></input>
        <label for="height">Height:</label>
        <input id="height" type="number"></input>
        <label for="shape">Shape:</label>
        <select id="shape" type="number">
          <option value="rectangle">Rectangle (default)</option>
          <option value="triangle">Triangle</option>
          <option value="hexagon">Hexagon</option>
          <option value="rectangle">Parallelogram</option>
        </select>
      </form>
    )
  }
}
