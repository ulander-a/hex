import {
    HIGHLIGHT_HEX, UPDATE_HEX, GET_GRID_START,
    GET_GRID_SUCCESS, GET_GRID_FAILURE, GET_USER_GRIDS_START,
    GET_USER_GRIDS_SUCCESS, GET_USER_GRIDS_FAILURE, CREATE_GRID_START, 
    CREATE_GRID_SUCCESS, CREATE_GRID_FAILURE
} from '../constants/action-types'

const defaultState = {
    isFetching: false,
    message: '',
    userGrids: [],
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
        case UPDATE_HEX: 
            return {
                ...state,
                grid: payload.grid,
                hex: payload.hex
            }
        case CREATE_GRID_START:
            return {
                ...state,
                isFetching: true,
            }
        case CREATE_GRID_SUCCESS:
            return {
                ...state,
                isFetching: false,
                message: 'Das it mane'
            }
        case CREATE_GRID_FAILURE:
            return {
                ...state,
                message: payload
            }
        case GET_USER_GRIDS_START:
            return {
                ...state,
                isFetching: true
            }
        case GET_USER_GRIDS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                userGrids: payload,
                message: 'Das it mane'
            }
        case GET_USER_GRIDS_FAILURE:
            return {
                ...state,
                isFetching: false,
                message: payload
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