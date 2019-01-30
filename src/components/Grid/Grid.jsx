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
            grid: []
        }
    }

    componentWillMount() {
        this.setState({
            GridFactory: Honeycomb.defineGrid(this.state.HexFactory)
        })
    }

    componentDidMount() {
        const gridData = this.state.GridFactory.rectangle({
             width: 5,
             height: 5
        })

        gridData.forEach(element => {
            element.data = {
                name: 'unnamed',
                terrain: 'plains'
            }
        });

        this.setState({...this.state, grid: gridData})
    }

    render() {
        const { grid, GridFactory } = this.state

        return (
            <section>
                <Canvas GridFactory={GridFactory} grid={grid} />
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