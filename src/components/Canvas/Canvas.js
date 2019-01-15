import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types'
import * as PIXI from 'pixi.js'

export default class Canvas extends PureComponent {
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

  componentDidMount() {
    const {
      GridFactory,
      shape,
      width,
      height
    } = this.props

    // Add the canvas
    document.getElementById('canvas-container').appendChild(
      this.state.app.view
    )

    this.state.graphics.lineStyle(1, 0x999999)

    // TODO: Add support for different grid shapes
    const grid = GridFactory.rectangle({
      width: width,
      height: height,
    })

    this.draw(grid)
  }

  draw(grid) {
    grid.forEach(hex => {
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
    });
  }

  // highlight(hex) {
  //   this.graphics.clear()
  // }

  render() {
    return (
      <div id="canvas-container">

      </div>
    )
  }
}