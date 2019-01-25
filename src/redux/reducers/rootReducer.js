import {TEST_ACTION} from '../constants/action-types'

const defaultState = {
    option: 'unchanged',
    articles: [],
}

const rootReducer = (state = defaultState, action) => {
    switch (action.type) {
        case TEST_ACTION:
            return {
                ...state,
                option: 'changed'
            }
        default:
            return state
    }
}

export default rootReducer