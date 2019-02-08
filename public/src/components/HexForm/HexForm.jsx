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
    console.log(this.props.hex)
  }

  handleChange = idx => e => {
    const newFields = this.state.fields.map((field, fidx) => {
      if (idx !== fidx) return field
      return { ...field, value: e.target.value }
    })

    this.setState({fields: newFields})
  }

  render() {
    const { fields } = this.state

    return (
      <form onSubmit={this.handleSubmit}>
        {
          fields.map((field, idx) =>
            <div key={idx}>
              <label htmlFor={field.id}>{field.label}</label>
              <input id={field.id} type={field.type} value={field.value} onChange={this.handleChange(idx)} />
            </div>
          )
        }
        <button type="submit">Save</button>
      </form>
    )
  }
}

export default HexForm
