import { SET_OPTIONS, HIGHLIGHT_HEX, CREATE_GRID } from '../constants/action-types'

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
    const { payload } = action
    switch (action.type) {
        case SET_OPTIONS:
            return {
                ...state,
                options: payload
            }
        case CREATE_GRID:
            return {
                ...state,
                grid: payload
            }
        case HIGHLIGHT_HEX:
            return {
                ...state,
                hex: {
                    isHighlighted: true,
                    coordinates: { x: payload.x, y: payload.y },
                    data: { name: payload.data.name, terrain: payload.data.terrain }
                }
            }
        default:
            return state
    }
}

export default rootReducer