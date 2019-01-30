import { CREATE_GRID, HIGHLIGHT_HEX } from '../constants/action-types'

const defaultState = {
    options: {
        width: 5,
        height: 5,
        shape: 'rectangle'
    },
    grid: [],
    hex: {
        isHighlighted: false,
        coordinates: {
            x: null,
            y: null
        },
        data: {
            name: 'chungus',
            terrain: '2019 jazz'
        }
    }
}

const rootReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CREATE_GRID:
            return {
                ...state,
                options: action.payload
            }
        case HIGHLIGHT_HEX:
            return {
                ...state,
                hex: {
                    isHighlighted: true,
                    coordinates: {x: action.payload.x, y:action.payload.y},
                    data: {name: 'Karmanjaka', terrain: 'Castle'}
                }
            }
        default:
            return state
    }
}

export default rootReducer