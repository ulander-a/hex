import React, { PureComponent } from 'react'
import { Canvas } from '../index'
import { connect } from 'react-redux'
import './Grid.css'

const Honeycomb = require('honeycomb-grid')

class Grid extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            // options: {
            //     shape: 'rectangle',
            //     width: 5,
            //     height: 5,
            // },
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
        const { GridFactory } = this.state
        const { shape, width, height } = this.props.options

        return (
            <section>
                <Canvas
                    GridFactory={GridFactory}
                    shape={shape}
                    width={width}
                    height={height}
                />
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        options: state.rootReducer.options
    }
}

export default connect(mapStateToProps)(Grid)