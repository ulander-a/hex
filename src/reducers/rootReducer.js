import { CHANGE_OPTION, CREATE_GRID } from '../components/Options/actions'

const defaultState = {
  test: 'tjofaderittan hambo!',
  option: 'unchanged',
}

const rootReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_OPTION:
      return {
        ...state,
        option: 'aaaaaaaa'
      }
    default:
      return state
  }
}

export default rootReducer