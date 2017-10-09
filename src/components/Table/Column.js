import store from './store'

export default {
  name: 'fix-column',
  props: ['prop', 'label'],
  render () {
    const type = this.$attrs.type
    const { tableChecked } = store
    const checkedMap = {
      'empty': false,
      'part': true,
      'all': true
    }
    console.log(tableChecked)
    switch (type) {
      case 'selection':
        return <th><input type="checkbox" checked={checkedMap[tableChecked]} /></th>
      default:
        return <th>{this.label}</th>
    }
  }
}
