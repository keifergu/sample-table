import store, { ROW_CHECKED } from './store'

function checkeRow (row, status) {
  store.commit('checkRow', {
    key: row.key,
    status: !status
  })
}

export default {
  name: 'row',
  functional: true,
  render (h, context) {
    // data 为该列的数据，columns 为列的配置
    const { data, columns, index } = context.props
    const checked = data[ROW_CHECKED]
    const row = columns.map(col => {
      switch (col.type) {
        case 'selection':
          return (
            <td>
              <input type="checkbox" checked={checked} onChange={() => checkeRow(data, checked)}/>
            </td>
          )
        default:
          return <td>{col.template ? col.template({data, index}) : data[col.prop]}</td>
      }
    })
    return row
  }
}
