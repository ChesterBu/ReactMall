import * as TYPES from '../action-types'
import { queryBanner } from '../../api/course'
let course = {
    queryBanner() { 
        return {
            type: TYPES.COURSE_QUERY_BANNER,
            payload:queryBanner()
        }
    }
}
export default course