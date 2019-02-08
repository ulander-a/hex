import React, { PureComponent } from 'react'
import { Canvas } from '../index'
import { connect } from 'react-redux'
import { getGrid, createGrid } from '../../redux/actions'
import './Grid.css'

const Honeycomb = require('honeycomb-grid')

class Grid extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
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

    componentDidMount() {
        // Fetch griddata from api
        // TODO: Change it to take dynamic id's at some point
        this.props.dispatch(getGrid('5c5bfb6cfb6fc06f4f579967'))

        // Create grid

        // const gridData = this.state.GridFactory.rectangle({
        //     width: this.props.options.width,
        //     height: this.props.options.height
        // })

        // gridData.forEach(element => {
        //     element.data = {
        //         name: 'unnamed',
        //         terrain: 'plains'
        //     }
        // })

        // this.props.dispatch(createGrid(gridData))
    }

    componentDidUpdate() {
        // Meant to be used when creating brand new grids,
        // might need tweaking later
        const gridData = this.state.GridFactory.rectangle({
            width: this.props.options.width,
            height: this.props.options.height
        })

        gridData.forEach(element => {
            element.data = {
                name: 'unnamed',
                terrain: 'plains'
            }
        })

        this.props.dispatch(createGrid(gridData))
    }

    render() {
        const { GridFactory } = this.state

        return (
            <section>
                {/* <Canvas GridFactory={GridFactory} /> */}
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