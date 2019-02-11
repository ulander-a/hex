import React, { Component } from 'react'
import { Canvas } from '../index'
import { connect } from 'react-redux'
import { getGrid } from '../../redux/actions'
import '.Grid.css'
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
    }

    render() {
        return (
            <p>This is where the magic happens</p>
        )
    }
}

const mapStateToProps = state => {
    return {
        grid: state.rootReducer.options
    }
}

export default connect(mapStateToProps)(Grid)