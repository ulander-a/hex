import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateHex } from '../../redux/actions'

export class HexForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      fields: [
        // { element: 'input', id: 'name', type: 'text', label: 'Name', value: 'unnamed' },
        // { element: 'input', id: 'terrain', type: 'text', label: 'Terrain', value: 'plains' },
      ]
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    // this.getDerivedStateFromProps = this.getDerivedStateFromProps.bind(this)
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

  render() {
    const fields = Object.entries(this.props.hex.data).map(entry => {
      console.log(entry)

      const field = {
        id: entry[0],
        type: 'text',
        value: entry[1]
      }

      return field
    })

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
