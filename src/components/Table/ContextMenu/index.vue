<template>
  <ul v-show="visible" class="context-menu" :style="menuStyle">
    <li @click="handleClick">edit</li>
    <li>remove</li>
  </ul>
</template>

<script>
export default {
  name: 'context-menu',
  data () {
    return {
      position: {},
      visible: false,
      rowData: null
    }
  },
  mounted () {
    document.addEventListener('click', () => {
      this.visible = false
    })
  },
  computed: {
    menuStyle () {
      const { top, left } = this.position
      return {
        top,
        left
      }
    }
  },
  methods: {
    handleClick () {
      console.log(this.rowData)
    },
    toggleVisible (status) {
      if (status) {
        this.visible = !!status
      } else {
        this.visible = !this.visible
      }
    }
  }
}
</script>
