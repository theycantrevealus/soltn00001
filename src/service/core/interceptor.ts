import store from '@/store'
import instance from './api'

export default function execute () {
  instance.interceptors.request.use(function (config: any) {
    const token = store.state.credential.token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
      return config
    } else {
      return config
    }
  }, function (err) {
    return Promise.reject(err)
  })
  instance.interceptors.response.use((response) => {
    return response
  }, (err) => {
    console.log(err.response.status)
    if (err.response.status === 401) {
      store.commit('LOGOUT')
    }
    console.log('err')
    return Promise.reject(err)
  })
}
