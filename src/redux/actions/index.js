import {
    TEST_ACTION,
    CHANGE_OPTION,
    CREATE_GRID,
} from '../constants/action-types'

export function test(payload) {
    return { type: TEST_ACTION, payload }
}

export const changeOption = options => ({
    type: CHANGE_OPTION,
    payload: options
})

// export const createGrid = options => ({
//     type: CREATE_GRID_START,
//     payload: options
// })
