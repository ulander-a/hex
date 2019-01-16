export const CHANGE_OPTION = 'CHANGE_OPTION'
export const CREATE_GRID = 'CREATE_GRID'

export function changeOption(option) {
    return { type: CHANGE_OPTION, option }
}

export function createGrid(options) {
    return { type: CREATE_GRID, options }
}