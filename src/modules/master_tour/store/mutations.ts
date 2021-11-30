import * as types from './types'

export default {
  [types.TOUR_LIST] (state: any) {
    return state.items
  },

  [types.TOUR_ADD] (state: any, item: any) {
    state.items.push(item)
  },

  [types.TOUR_REMOVE] (state: any, id: any) {
    state.items = state.items.filter((item: any) => item.id !== id)
  }
}
