import TableStore from './TableStore'

const store = new TableStore({
  state: {
    originData: {},
    columns: [],
    menu: {
      visible: false,
      scope: {}
    }
  },
  mutations: {
    updateOriginData (state, payload) {
      state.originData = payload.data
    },
    updateColumns (state, payload) {
      state.columns = payload.columns
    }
  }
})

export default store
