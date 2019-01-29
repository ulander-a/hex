import React, { Component } from 'react'
// import { connect } from 'react-redux'
// IMPORT ACTIONS HERE

export class HexForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      fields: [
        { element: 'input', id: 'name', type: 'text', label: 'Name', value: 'unnamed' },
        { element: 'input', id: 'terrain', type: 'text', label: 'Terrain', value: 'plains' },
      ]
    }
  }

  handleSubmit(e) {
    e.preventDefault()
  }

  handleChange(e) {
    e.preventDefault()
  }

  render() {
    const { fields } = this.state

    return (
      <form onSubmit={this.handleSubmit}>
        {
          fields.map((field, i) =>
            <div key={i}>
              <label htmlFor={field.id}>{field.label}</label>
              <input id={field.id} type={field.type} value={field.value} onChange={this.handleChange} />
            </div>
          )
        }
        <button type="submit">Save</button>
      </form>
    )
  }
}

export default HexForm
