import AccountService from '../../service/account/index'
import { IAccount, ILoginRequest } from '@/model/account/AccountResponse'
const state: {} = {
  credential: {
    data: {},
    isAuth: false
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
    LOGIN: ({ commit }: { commit:Function }, accountRequestData : ILoginRequest) => {
      return AccountService.login(accountRequestData).then((response:any) => {
        commit('LOGIn_SUCCESS', response)
      })
    }
  },
  mutations: {
    LOGIN_SUCCESS (state:any, credentialData:IAccount) : IAccount {
      state.credential.data = credentialData
      return credentialData
    }
  }
}
