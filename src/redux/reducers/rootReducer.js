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
        coordinates: {},
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
                    ...state,
                    isHighlighted: true,
                    coordinates: action.payload,
                    data: {
                        name: '',
                        terrain: ''
                    }
                }
            }
        default:
            return state
    }
}

export default rootReducer