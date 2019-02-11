import React, { Component } from 'react'
import { Canvas } from '../index'
import { connect } from 'react-redux'
import { getGrid } from '../../redux/actions'
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

    componentDidMount() {
        this.props.dispatch(getGrid('5c5bfb6cfb6fc06f4f579967'))
    }

    render() {
        // use this later to get height and width
        const { grid } = this.props
        const renderable = () => {
            if (grid.hexes.length > 0) {
                return this.state.GridFactory.rectangle({
                    width: 5,
                    height: 5
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