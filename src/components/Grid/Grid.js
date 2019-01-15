import React, { PureComponent } from 'react'
import { Canvas } from '../index'
const Honeycomb = require('honeycomb-grid')

export default class Grid extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            shape: 'rectangle',
            width: 5,
            height: 5,
            HexFactory: Honeycomb.extendHex({
                size: 50,
                orientation: 'flat'
            }),
            GridFactory: {},
        }
    }

    componentWillMount() {
        this.setState({
            GridFactory: Honeycomb.defineGrid(this.state.HexFactory)
        })
    }

    render() {
        const {
            GridFactory,
            shape,
            width,
            height
        } = this.state

        return (
            <div>
                <Canvas 
                    grid={GridFactory}
                    shape={shape}
                    width={width}
                    height={height}
                />
            </div>
        )
    }
}
