import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { getUserGrids, getGrid } from '../../redux/actions';

export class GridPicker extends PureComponent {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  componentWillMount() {
    this.props.dispatch(getUserGrids())
  }

  componentDidUpdate() {
    this.props.dispatch(getGrid(this.props.grids[0]._id))
  }

  handleChange(e) {
    this.props.dispatch(getGrid(e.target.value))
  }

  render() {
    const { grids } = this.props

    return (
      <div>
        <p>Pick a grid!</p>
        <select onChange={this.handleChange}>
          {
            grids.map((grid, i) => (
              <option key={i} value={grid._id}>{grid.name}</option>
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
