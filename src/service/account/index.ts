import axios from 'axios'
import { ILoginRequest } from '@/model/account/AccountResponse'

class AccountService {
  login (accountData: ILoginRequest) {
    return axios.post(`${process.env.VUE_APP_APIGATEWAY}Pegawai`, {
      request: 'login',
      email: accountData.email,
      password: accountData.password
    })
      .then(response => {
        return Promise.resolve(response)
      })
  }
}

export default new AccountService()
