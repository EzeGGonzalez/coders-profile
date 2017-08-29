<template>
  <span>
    {{owner.company}}
  </span>
</template>

<script>
import API from '@/api'

export default {
  name: 'Owner',
  props: ['id'],
  data () {
    return {
      owner: {}
    }
  },
  created () {
    API.getCompany(this.id)
      .then(snap => (this.owner = snap.val()))
  }
}
</script>

<style lang="scss" scoped>
</style>
