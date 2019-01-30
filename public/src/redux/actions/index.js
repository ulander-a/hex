import {
    SET_OPTIONS,
    HIGHLIGHT_HEX,
    ADD_DATA_TO_HEX,
    CREATE_GRID,
} from '../constants/action-types'

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