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

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
  }

  handleChange(e) {
    e.preventDefault()
    const target = e.target
    const { value, id } = target
    const field = Object.assign(
      {}, this.state.fields.find(field => field.id === id), { value: value }
    )
    
    this.setState({
      fields: [
        ...this.state.fields,
        field
      ]
    })
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
