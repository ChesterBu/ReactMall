import * as TYPES from '../action-types'
import { queryBanner,queryList } from '../../api/course'
let course = {
    queryBanner() { 
        return {
            type: TYPES.COURSE_QUERY_BANNER,
            payload:queryBanner()
        }
    },
    queryList(payload = {}) {
        let {
            limit = '10', page = '1', type = 'all',flag='push'
        } = payload
        return async dispatch => { 
            let result = await queryList({limit,page,type});
            dispatch({
                type: TYPES.COURSE_QUERY_LIST,
                result,
                flag,
                courseType:type
            });
        }
    }
}
export default course