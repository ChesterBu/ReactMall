import {combineReducers} from 'redux'
import person from './person'
import course from './course'

export default combineReducers({
    course,
    person
})