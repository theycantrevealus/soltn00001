import AccountService from '../../service/account/index'
import { TAccount, TAccountLogin } from '@/model/Account'
const state: {} = {
  credential: {
    token: localStorage.getItem('tn.sol.acc')
  }
}
export const account = {
  namespaced: true,
  state: state,
  getters: {
    getAuthenticated: (state:any) => {
      return state.credential
    }
  },
  actions: {
    LOGIN: ({ commit }: { commit:Function }, accountRequestData : TAccountLogin) => {
      return AccountService.login(accountRequestData).then((response:any) => {
        commit('LOGIN_SUCCESS', response.data.response_token)
        return response
      })
    }
  },
  mutations: {
    LOGIN_SUCCESS (state:any, credentialData:TAccount) : TAccount {
      state.credential.token = credentialData
      return credentialData
    }
  }
}
