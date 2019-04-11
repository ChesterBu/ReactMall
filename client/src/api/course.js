import axios from './index'

//获取轮播图数据
export function queryBanner() { 
    return axios.get('/course/banner')
}

//获取课程列表信息
export function queryList(params) { 
    return axios.get('/course/list', {
        params
    })
}

//获取课程详细信息
export function queryInfo(courseID) { 
    return axios.get('/course/info', {
        params: {
            courseID
        }
    });
}