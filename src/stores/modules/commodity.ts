const state = {
  commodity: []
}

const actions = {
  add_commodity (states: any, commodity: any[]) {
    states.commit('set_commodity', commodity)
  },
  get_commodity_by_id (states: any, id: number): any {
    if (id) {
      return state.commodity[id]
    } else {
      return []
    }
  },
  add_commodity_to_shoppingcart_by_id (states: any, id: number): any {
    const item: any = state.commodity[id]
    if (item.buyNum <= item.count) {
      item.buyNum += 1
    }
    const commdity = [...states.state.commodity]
    commdity[id] = item
    states.commit('change_buycount_of_commodity', commdity)
  },
  reduce_commodity_to_shoppingcart_by_id (states: any, id: number): any {
    const item: any = state.commodity[id]
    if (item.buyNum <= item.count) {
      item.buyNum -= 1
    }
    const commdity = [...states.state.commodity]
    commdity[id] = item
    states.commit('change_buycount_of_commodity', commdity)
  }
}

const getters = {
  get_commodity (state: any): any[] {
    return state.commodity
  }
}

const mutations = {
  set_commodity (state: any, data: any[]) {
    state.commodity = [
      ...state.commodity,
      ...data
    ]
  },
  change_buycount_of_commodity(state: any, data: any[]) {
    state.commodity = [
      ...data
    ]
  }
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
