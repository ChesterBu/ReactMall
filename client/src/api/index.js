import axios from 'axios'
import Qs from 'qs'

axios.defaults.baseURL = 'http://loaclhost:8000';
axios.defaults.withCredentials = true;  //跨域并且允许带cookie
axios.defaults.transformRequest = (data = {}) => Qs.stringify(data)  //统一请求主体为url-encodee格式
axios.interceptors.response.use(result => result.data) 

export default axios
