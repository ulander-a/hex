import React from 'react'

export default function HexDetails(props) {
    return (
        <div>
            <p>X: {props.hex.x}</p>
            <p>Y: {props.hex.y}</p>
        </div>
    )
}