import { SET_OPTIONS, HIGHLIGHT_HEX, CREATE_GRID, GET_GRID_START, GET_GRID_SUCCESS, GET_GRID_FAILURE } from '../constants/action-types'

const defaultState = {
    isFetching: false,
    message: '',
    grid: {
        _id: null,
        height: 5,
        width: 5,
        hexes: []
    },
    hex: {
        isHighlighted: false,
        x: null,
        y: null,
        data: {}
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
                    x: payload.x, 
                    y: payload.y,
                    data: { name: payload.data.name, terrain: payload.data.terrain }
                }
            }
        case GET_GRID_START:
            return {
                ...state,
                isFetching: true
            }
        case GET_GRID_SUCCESS:
            return {
                ...state,
                isFetching: false,
                grid: payload,
                message: 'Das it mane'
            }
        case GET_GRID_FAILURE:
            return {
                ...state,
                isFetching: false,
                message: payload
            }
        default:
            return state
    }
}

export default rootReducer