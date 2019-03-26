import React from 'react'

export default function HexDetails(props) {
    const { hex } = props
    return (
        <div>
            <h2>{hex.data.name}</h2>
            <h3>{hex.data.terrain}</h3>
            <p>X: {hex.x}</p>
            <p>Y: {hex.y}</p>
            <hr />
            <h3>Free text:</h3>
            <span>{hex.data.freetext}</span>
        </div>
    )
}