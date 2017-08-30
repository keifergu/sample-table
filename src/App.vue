<template>
  <div id="app">
    <fix-table :data="data">
      <fix-column
        label="姓名"
        prop="name">
      </fix-column>
      <fix-column
        label="年龄"
        prop="sex">
      </fix-column>
    </fix-table>
  </div>
</template>

<script>
import { fixTable, fixColumn } from './components/Table'

export default {
  name: 'app',
  data () {
    return { data: [
    {name: 'Alex', sex: 'Male'},
    {name: 'Nekox', sex: 'Female'}]
    }
  },
  components: {
    fixTable,
    fixColumn
  }
}
</script>
