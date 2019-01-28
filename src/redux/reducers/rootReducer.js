import { CHANGE_OPTION } from '../constants/action-types'

const defaultState = {
    options: {
        width: 5,
        height: 5,
        shape: 'rectangle'
    },
    grid: []
}

const rootReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_OPTION:
            console.log('nani?!', action)
            return {
                ...state,
                options: action.payload
            }
        default:
            return state
    }
}

export default rootReducer