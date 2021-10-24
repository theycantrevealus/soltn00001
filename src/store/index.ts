import { createStore } from 'vuex'
import PersistedState from 'vuex-persistedstate'
import SecureLS from 'secure-ls'
import { account } from '@/store/account'
import { TAccountLogin } from '@/model/Account'
import AccountService from '@/service/account'

const ls = new SecureLS({ isCompression: false })
const store = createStore({
  state: {
    loading: 0,
    credential: {
      token: null
    }
  },
  plugins: [PersistedState({
    storage: {
      getItem: (key) => ls.get(key),
      setItem: (key, value) => ls.set(key, value),
      removeItem: (key) => ls.remove(key)
    }
  })],
  actions: {
    LOGIN: ({ commit }: { commit:Function }, accountRequestData : TAccountLogin) => {
      return AccountService.login(accountRequestData).then((response:any) => {
        commit('LOGIN_SUCCESS', response.data.response_token)
        return response
      })
    },
    LOGOUT: ({ commit }: {commit: Function}) => {
      commit('CLEAR_SESSION')
    }
  },
  mutations: {
    START_LOADING: state => state.loading++,
    FINISH_LOADING: state => state.loading--,
    GET_TOKEN: (state) => state.credential.token,
    LOGIN_SUCCESS (state:any, credentialData:string) : string {
      state.credential.token = credentialData
      return credentialData
    },
    CLEAR_SESSION (state: any) {
      state.credential.token = null
    }
  },
  modules: {
    mAccount: account
  }
})

export default store
