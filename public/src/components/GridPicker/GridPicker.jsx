import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { getUserGrids } from '../../redux/actions';

export class GridPicker extends PureComponent {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    this.props.dispatch(getUserGrids())
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

const mapStateToProps = state => {
  return {
    grids: state.rootReducer.userGrids
  }
}

export default connect(mapStateToProps)(GridPicker)
