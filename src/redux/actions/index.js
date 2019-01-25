import { TEST_ACTION } from '../constants/action-types'

export function test(payload) {
    return { type: TEST_ACTION, payload }
}