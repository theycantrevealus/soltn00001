import { createStore } from 'vuex'
import PersistedState from 'vuex-persistedstate'
import SecureLS from 'secure-ls'
import { account } from '@/store/account'

const ls = new SecureLS({ isCompression: false })

const store = createStore({
  state: {
  },
  plugins: [PersistedState({
    storage: {
      getItem: (key) => ls.get(key),
      setItem: (key, value) => ls.set(key, value),
      removeItem: (key) => ls.remove(key)
    }
  })],
  mutations: {
  },
  actions: {
  },
  modules: {
    mAccount: account
  }
})

export default store
