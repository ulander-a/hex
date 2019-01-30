import React, { PureComponent } from 'react'
import { Canvas } from '../index'
import { connect } from 'react-redux'
import { createGrid } from '../../redux/actions'
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

    componentDidMount() {
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
        // this.setState({...this.state, grid: gridData})
    }

    render() {
        const { GridFactory } = this.state

        return (
            <section>
                <Canvas GridFactory={GridFactory} />
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