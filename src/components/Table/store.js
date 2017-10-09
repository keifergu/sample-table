import TableStore from './TableStore'

export const ROW_CHECKED = Symbol('rowChecked')
const checkStatus = {
  all: 'all',
  part: 'part',
  empty: 'empty'
}

const store = new TableStore({
  state: {
    // 原始数据
    originData: [],
    // 列的配置
    columns: [],
    // 右键菜单状态
    menu: {
      visible: false,
      scope: {}
    }
  },
  mutations: {
    // 更新原始数据
    updateOriginData (state, payload) {
      state.originData = payload.data
    },
    // 更新列数据，表示列的配置
    updateColumns (state, payload) {
      state.columns = payload.columns
    },

    updateTableChecked (state, { oldCheckedStatus }) {
      switch (oldCheckedStatus) {
        case checkStatus.empty:
        case checkStatus.part:
          this.commit('selectAll', true)
          break
        case checkStatus.all:
          this.commit('selectAll', false)
          break
        default:
      }
    },

    selectAll (state, status) {
      state.originData.forEach(function (row) {
        row[ROW_CHECKED] = status
      })
    },

    checkRow (state, { key, status }) {
      const row = state.originData.find(row => row.key === key)
      row[ROW_CHECKED] = status
    }
  },
  getters: {
    tableChecked (state) {
      const originLength = state.originData.length
      const checkedArray = state.originData.filter(row => row[ROW_CHECKED])
      switch (checkedArray.length) {
        case 0:
          return checkStatus.empty
        case originLength:
          return checkStatus.all
        default:
          return checkStatus.part
      }
    }
  }
})

export default store
