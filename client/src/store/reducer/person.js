import * as TYPES from '../action-types'

export default function person(state = [], action) {
    state = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        

        default:
            break;
    }
    return state;
}