<template>
  <img :src="coder.photo" :alt="coder.fullname" />
</template>

<script>
import API from '@/api'

export default {
  name: 'CoderImage',
  props: ['id'],
  data () {
    return {
      coder: {}
    }
  },
  created () {
    API.getCoder(this.id)
      .then(snap => (this.coder = snap.val()))
  }
}
</script>

<style lang="scss">
</style>
