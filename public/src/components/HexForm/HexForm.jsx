import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateHex } from '../../redux/actions'

export class HexForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      fields: [
        { element: 'input', id: 'name', type: 'text', label: 'name', value: 'unnamed' },
        { element: 'input', id: 'terrain', type: 'text', label: 'terrain', value: 'plains' },
      ]
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    const hex = {
      x: this.props.hex.x,
      y: this.props.hex.y,
      data: {
        name: this.state.fields.find(el => el.id === 'name').value,
        terrain: this.state.fields.find(el => el.id === 'terrain').value
      }
    }
    this.props.dispatch(updateHex(hex, this.props.grid))
  }

  handleChange = idx => e => {
    const newFields = this.state.fields.map((field, fidx) => {
      if (idx !== fidx) return field
      return { ...field, value: e.target.value }
    })

    this.setState({ fields: newFields })
  }

  static getDerivedStateFromProps(props, state) {
    const fields = Object.entries(props.hex.data).map(entry => {
      const field = {
        element: 'input',
        id: entry[0],
        type: 'text',
        label: entry[0],
        value: entry[1],
      }

      return field
    })


    if (fields !== state.fields) {
      return { fields }
    } else return null
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

const mapStateToProps = state => {
  return {
    grid: state.rootReducer.grid,
    hex: state.rootReducer.hex
  }
}

export default connect(mapStateToProps)(HexForm)
