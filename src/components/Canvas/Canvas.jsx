import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
// import PropTypes from 'prop-types'
import * as PIXI from 'pixi.js'
import { highlightHex } from '../../redux/actions';

class Canvas extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      app: new PIXI.Application({
        transparent: true,
        antialias: true
      }),
      graphics: new PIXI.Graphics()
    }
  }

  // static propTypes = {

  // }

  // TODO: REFACTOR TO DECREASE REPETITION
  componentDidMount() {
    // Add the canvas
    document.getElementById('canvas-container').appendChild(
      this.state.app.view
    )
    console.log(this.props)
    
    // TODO: Add support for different grid shapes

    this.draw(this.props.grid)

    document.getElementById('canvas-container').addEventListener('click', ({ offsetX, offsetY }) => {
      const hexCoordinates = this.props.GridFactory.pointToHex([offsetX, offsetY])
      const highlightCoords = this.props.grid.get(hexCoordinates)

      if (highlightCoords) {
        const highlight = true
        this.draw(this.props.grid, highlightCoords, highlight)
        this.props.dispatch(highlightHex(highlightCoords))
      }
    })
  }

  componentDidUpdate() {
    this.draw(this.props.grid)

    document.getElementById('canvas-container').addEventListener('click', ({ offsetX, offsetY }) => {
      const hexCoordinates = this.props.GridFactory.pointToHex([offsetX, offsetY])
      const highlightCoords = this.props.grid.get(hexCoordinates)

      if (highlightCoords) {
        const highlight = true
        this.draw(this.props.grid, highlightCoords, highlight)
      }
    })
  }

  draw(grid, highlightCoords = null, highlight = false) {
    this.state.graphics.clear()
    this.state.graphics.lineStyle(1, 0x999999)

    grid.forEach(hex => {
      if (highlight) {
        if (hex.x === highlightCoords.x && hex.y === highlightCoords.y) {
          this.state.graphics.beginFill(0x999999)
        } else {
          this.state.graphics.endFill()
        }
      }

      const point = hex.toPoint()
      // add the hex's position to each of its corner points
      const corners = hex.corners().map(corner => corner.add(point))
      // separate the first from the other corners
      const [firstCorner, ...otherCorners] = corners

      // move the "pencil" to the first corner
      this.state.graphics.moveTo(firstCorner.x, firstCorner.y)
      // draw lines to the other corners
      otherCorners.forEach(({ x, y }) => this.state.graphics.lineTo(x, y))
      // finish at the first corner
      this.state.graphics.lineTo(firstCorner.x, firstCorner.y)

      this.state.app.stage.addChild(this.state.graphics)
    })
  }

  render() {
    return (
      <div id="canvas-container">

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    grid: state.rootReducer.grid
  }
}

export default connect(mapStateToProps)(Canvas)