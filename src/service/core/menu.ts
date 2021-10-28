import axios from 'axios'

class CoreService {
  menuAdd (menuData: any) {
    return axios.post(`${process.env.VUE_APP_APIGATEWAY}Core`, menuData)
      .then(response => {
        return Promise.resolve(response)
      })
  }

  menuDelete (menuData: any) {
    return axios.delete(`${process.env.VUE_APP_APIGATEWAY}Core`, {
      data: menuData
    })
      .then(response => {
        return Promise.resolve(response)
      })
  }
}

export default new CoreService()
