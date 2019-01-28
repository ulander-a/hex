import { CREATE_GRID, HIGHLIGHT_HEX } from '../constants/action-types'

const defaultState = {
    options: {
        width: 5,
        height: 5,
        shape: 'rectangle'
    },
    grid: [],
    highlighted: {}
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
                highlighted: action.payload
            }
        default:
            return state
    }
}

export default rootReducer