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
                orientation: 'flat'
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
        // console.log('wtf?', this.props.grid)
        // const NANI = this.props.grid.hexes.map(hex => {
        //      this.state.GridFactory(this.state.HexFactory(hex.x, hex.y))
        // })
        // console.log(NANI)
        // console.log('hm???', this.state.GridFactory.Hex(this.props.grid.hexes))
        // const created = this.stateGridFactory.Hex(this.props.grid.hexes)
        // trigger render somehow, maybe as a promise?
    }

    render() {

        return (
            this.props.isFetching ? <p>Fetching...</p> :
            <p>This is where the magic happens</p>
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