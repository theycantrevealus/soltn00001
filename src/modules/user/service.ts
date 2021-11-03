import axios from 'axios'

class UserService {
  getList (parseData) {
    if (parseData.request === undefined) {
      parseData.request = 'list'
    }

    return axios.post(`${process.env.VUE_APP_APIGATEWAY}Account`, parseData)
      .then((response:any) => {
        return Promise.resolve(response.data.response_package)
      })
  }

  getCustomers (params) {
    const queryParams = Object.keys(params).map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k])).join('&')
    return fetch('https://www.primefaces.org/demo/data/customers?' + queryParams).then(res => res.json())
  }
}

export default new UserService()
