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
    GET_USER_GRIDS_START,
    GET_USER_GRIDS_SUCCESS,
    GET_USER_GRIDS_FAILURE,
    CREATE_GRID_START,
    CREATE_GRID_SUCCESS,
    CREATE_GRID_FAILURE,
} from '../constants/action-types'

// Client-side actions

export const setOptions = options => ({
    type: SET_OPTIONS,
    payload: options
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
export const createGridStart = () => ({type: CREATE_GRID_START})
export const createGridSuccess = msg => ({
    type: CREATE_GRID_SUCCESS,
    // payload: msg
})
export const createGridFailure = error => ({
    type: CREATE_GRID_FAILURE,
    payload: error
})

export const createGrid = () => dispatch => {
    dispatch(createGridStart())

    return fetch(`${process.env.REACT_APP_API}/grids`, {
        method: 'POST'
    }).then(res => res.json())
    .then(data => dispatch(dispatch(createGridSuccess(data))))
    .catch(error => dispatch(createGridFailure(error)))
}

// GET users saved grids
export const getUserGridsStart = () => ({type: GET_USER_GRIDS_START})
export const getUserGridsSuccess = grid => ({
    type: GET_USER_GRIDS_SUCCESS,
    payload: grid
})
export const getUserGridsFailure = error => ({
    type: GET_USER_GRIDS_FAILURE,
    payload: error
})

export const getUserGrids = () => dispatch => {
    dispatch(getUserGridsStart())

    return fetch(`${process.env.REACT_APP_API}/grids`, {
        method: 'GET'
    }).then(res => res.json())
    .then(data => dispatch(getUserGridsSuccess(data)))
    .catch(error => dispatch(getUserGridsFailure(error)))
}

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
    dispatch(getGridStart())

    return fetch(`${process.env.REACT_APP_API}/grids/${id}`, {
        method: 'GET'
    }).then(res => res.json())
    .then(data => dispatch(getGridSuccess(data)))
    .catch(error => dispatch(getGridFailure(error)))
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

    return fetch(`${process.env.REACT_APP_API}/grids`, {
        method: 'POST',
        body: grid,
    }).then(res => saveGridSuccess(res))
    .catch(error => saveGridFailure(error))
}