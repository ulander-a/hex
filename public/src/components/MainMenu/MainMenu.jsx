import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { saveGrid } from '../../redux/actions'

class MainMenu extends PureComponent {
    constructor(props) {
      super(props)

      this.saveGrid = this.saveGrid.bind(this)
    }
    

    saveGrid() {
        this.props.dispatch(saveGrid(this.props.grid))
    }
    
    render() {
      const {grid} = this.props
    return (
      <div>
        <h1>{ grid.meta.name }</h1>
        <button onClick={this.saveGrid}>Save the grid!</button>     
      </div>
    )
  }
}

const mapStateToProps = state => {
    return {
        grid: state.rootReducer.grid
    }
}

export default connect(mapStateToProps)(MainMenu)