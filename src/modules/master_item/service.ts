import axios from 'axios'

class MasterItemService {
  getItemList (parsedData) {
    if (parsedData.request === undefined) {
      parsedData.request = 'list'
    }
    return axios.post(`${process.env.VUE_APP_APIGATEWAY}Account`, parsedData)
      .then((response:any) => {
        return Promise.resolve(response.data.response_package)
      })
  }
}
