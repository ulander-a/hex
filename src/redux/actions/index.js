import {
    TEST_ACTION,
    CREATE_GRID,
    HIGHLIGHT_HEX,
    ADD_DATA_TO_HEX,
} from '../constants/action-types'

export function test(payload) {
    return { type: TEST_ACTION, payload }
}

// export const changeOption = options => ({
//     type: CHANGE_OPTION,
//     payload: options
// })

export const createGrid = options => ({
    type: CREATE_GRID,
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