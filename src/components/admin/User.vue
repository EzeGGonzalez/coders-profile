<template>
  <span>
    {{coder.fullname}}
  </span>
</template>

<script>
import API from '@/api'

export default {
  name: 'Coder',
  props: ['id'],
  data () {
    return {
      coder: {}
    }
  },
  computed: {

  },
  methods: {
  },
  created () {
    API.getCoder(this.id)
      .then(snap => (this.coder = snap.val()))
  }
}
</script>

<style lang="scss" scoped>
#coders {
  .loading {
    text-align: center;
  }
}
</style>
