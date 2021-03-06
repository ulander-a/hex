import React, { Component } from 'react'
import { Canvas } from '../index'
import { connect } from 'react-redux'
import './Grid.css'
const Honeycomb = require('honeycomb-grid')

class Grid extends Component {
    constructor(props) {
        super(props)

        this.state = {
            HexFactory: Honeycomb.extendHex({
                size: 50,
                orientation: 'flat',
                data: {}
                // name: 'unnamed',
                // terrain: 'plains'
            }),
            GridFactory: {}
        }
    }

    componentWillMount() {
        this.setState({
            GridFactory: Honeycomb.defineGrid(this.state.HexFactory)
        })
    }

    render() {
        const { grid } = this.props
        const renderable = () => {
            if (grid.hexes.length > 0) {
                return this.state.GridFactory.rectangle({
                    width: grid.meta.width,
                    height: grid.meta.height
                })
            } else { return null }
        }

        return (
            this.props.isFetching ? <p>Fetching...</p> :
                <Canvas GridFactory={this.state.GridFactory} grid={renderable()} />
        )
    }
}

const mapStateToProps = state => {
    return {
        grid: state.rootReducer.grid,
        isFetching: state.rootReducer.isFetching
    }
}

export default connect(mapStateToProps)(Grid)