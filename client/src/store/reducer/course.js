import * as TYPES from '../action-types'
let INIT_STATE = {
    bannerData:[]
}
export default function course(state=INIT_STATE,action) {
    state = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case TYPES.COURSE_QUERY_BANNER:
            let { code, data } = action.payload  
            if (parseFloat(code) === 0) { 
                state.bannerData = data
            }
            break;
    
        default:
            break;
    }
    return state;
}