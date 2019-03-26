import {
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
    UPDATE_HEX,
    TOGGLE_MODAL,
} from '../constants/action-types'

// Client-side actions

export const highlightHex = hex => ({
    type: HIGHLIGHT_HEX,
    payload: hex
})

export const addDataToHex = hex => ({
    type: ADD_DATA_TO_HEX,
    payload: hex
})

export const updateHex = (hex, grid) => dispatch => {
    const updatedGrid = {
        ...grid,
        hexes: grid.hexes.map(h => {
            if (h.x === hex.x && h.y === hex.y) {
                return hex
            } else { return h }
        })
    }

    const payload = {
        grid: updatedGrid,
        hex: hex
    }

    dispatch({
        type: UPDATE_HEX,
        payload: payload
    })
}

export const toggleModal = isOpen => dispatch => {
    let payload
    isOpen === true ? payload = false : payload = true
    dispatch({ type: TOGGLE_MODAL, payload: payload}) 
}

/**
 * Server-side actions 
 */
// CREATE grid
export const createGridStart = () => ({ type: CREATE_GRID_START })
export const createGridSuccess = msg => ({
    type: CREATE_GRID_SUCCESS,
    payload: 'Das it mane'
})
export const createGridFailure = error => ({
    type: CREATE_GRID_FAILURE,
    payload: error
})

export const createGrid = grid => dispatch => {
    dispatch(createGridStart())
    return fetch(`${process.env.REACT_APP_API}/grids`, {
        method: 'POST',
        'headers': { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(grid)
    }).then(res => res.json())
        .then(() => {
            // TODO: Automatically get the new grid
            dispatch(getUserGrids())
        })
        .catch(error => dispatch(createGridFailure(error)))
}

// GET users saved grids
export const getUserGridsStart = () => ({ type: GET_USER_GRIDS_START })
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
export const getGridStart = () => ({ type: GET_GRID_START })
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
export const saveGridStart = () => ({ type: SAVE_GRID_START })
export const saveGridSuccess = res => ({
    type: SAVE_GRID_SUCCESS,
    payload: res
})
export const saveGridFailure = error => ({
    type: SAVE_GRID_FAILURE,
    payload: error
})

export const saveGrid = grid => dispatch => {
    dispatch(saveGridStart())
    return fetch(`${process.env.REACT_APP_API}/grids/${grid._id}`, {
        method: 'PUT',
        'headers': { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(grid),
    }).then(res => dispatch(saveGridSuccess(res)))
        .catch(error => dispatch(saveGridFailure(error)))
}