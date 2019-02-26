import React, { PureComponent } from 'react'

export class GridPicker extends PureComponent {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  componentWillMount() {

  }

  handleChange(e) {
    return null
  }

  render() {
    const { grids } = this.props

    return (
      <div>
        <select>
          {
            grids.map((grid, i) => (
              <option key={i} value={grid.id}>{grid.name}</option>
            ))
          }
        </select>
      </div>
    )
  }
}

export default GridPicker
