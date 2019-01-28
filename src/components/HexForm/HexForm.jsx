import React, { Component } from 'react'
import { connect } from 'react-redux'
// IMPORT ACTIONS HERE

export class HexForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      fields: [
        { element: 'input', id: 'name', type: 'text', label: 'Name', value: 'bby pls' }
      ]
    }
  }

  render() {
    const { fields } = this.state

    return (
      <form onSubmit={this.handleSubmit}>
        {fields.map((field, i) => (
          <input key={i} id={field.id} type={field.type} value={field.value} onChange={this.handleChange} />
        ))}
        <button type="submit">Save</button>
      </form>
    )
  }
}

export default HexForm
