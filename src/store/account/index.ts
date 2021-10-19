import AccountService from '../../service/account/index'
import { IAccount, ILoginRequest } from '@/model/account/AccountResponse'
export const account = {
  namespaced: true,
  state: {
    credential: {
      data: {},
      isAuth: false
    }
  },
  getters: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    getAuthenticated: (state) => {
      return state.credential
    }
  },
  actions: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    LOGIN: ({ commit }, accountRequestData : ILoginRequest) => {
      return AccountService.login(accountRequestData).then((response) => {
        commit('LOGIN_SUCCESS', response)
      })
    }
  },
  mutations: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    LOGIN_SUCCESS (state, credentialData:IAccount) : IAccount {
      state.credential.data = credentialData
      return credentialData
    }
  }
}
