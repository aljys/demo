//配置api接口参数
// const root = process.env.API_ROOT;

  import axios from './api.js' // 倒入 api
 
/* 将所有接口统一起来便于维护
 * 如果项目很大可以将 url 独立成文件，接口分成不同的模块
 * 此处的数据依然来自 Easy Mock
 */
 
// 单独倒出
export const query = params => {
  return axios({
    url: '/j/subject_abstract',
    method: 'get',
    params
  })
}
  
export const mock = params => {
  return axios({
    url: '/j/search_subjects',
    method: 'get',
    params
  })
}
 
// export const upload = params => {
//   return axios({
//     url: '/j/search_tags',
//     method: 'get',
//     params
//   })
// }
 
// 默认全部倒出
// 根绝需要进行 
export default {
  query,
  mock,
  // upload
}