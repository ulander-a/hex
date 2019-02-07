import {
    SET_OPTIONS,
    CREATE_GRID,
    HIGHLIGHT_HEX,
    ADD_DATA_TO_HEX,
    SAVE_GRID_START,
    SAVE_GRID_SUCCESS,
    SAVE_GRID_FAILURE,
    GET_GRID_START,
    GET_GRID_SUCCESS,
    GET_GRID_FAILURE,
} from '../constants/action-types'

const API = process.env.API_URL

// Client-side actions

export const setOptions = options => ({
    type: SET_OPTIONS,
    payload: options
})

export const createGrid = grid => ({
    type: CREATE_GRID,
    payload: grid
})

export const highlightHex = hex => ({
    type: HIGHLIGHT_HEX,
    payload: hex
})

export const addDataToHex = hex => ({
    type: ADD_DATA_TO_HEX,
    payload: hex
})

/**
 * Server-side actions 
 */
// CREATE grid

// GET grid
export const getGridStart = () => ({type: GET_GRID_START}) 
export const getGridSuccess = grid => ({
    type: GET_GRID_SUCCESS,
    payload: grid
})
export const getGridFailure = error => ({
    type: GET_GRID_FAILURE,
    payload: error
})

export const getGrid = id => dispatch => {
    dispatch(getGridStart)

    return fetch(`${API}/grids/${id}`, {
        method: 'GET'
    }).then(grid => getGridSuccess(grid))
    .catch(error => getGridFailure(error))
}

 // SAVE grid
export const saveGridStart = () => ({type: SAVE_GRID_START})
export const saveGridSuccess = res => ({
    type: SAVE_GRID_SUCCESS,
    payload: res
})
export const saveGridFailure = error => ({
    type: SAVE_GRID_FAILURE,
    payload: error
})

export const saveGrid = grid => dispatch => {
    dispatch(saveGridStart)

    return fetch(`${API}/grids`, {
        method: 'POST',
        body: grid,
    }).then(res => saveGridSuccess(res))
    .catch(error => saveGridFailure(error))
}