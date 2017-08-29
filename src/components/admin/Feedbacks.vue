<template>
  <section id="coders">
    <div class="columns">
      <div class="column is-12">
        <div class="loading" v-if="fetchingData">
          <a class="button is-danger is-large is-loading">Loading</a>
        </div>

        <div v-if="!fetchingData" class="content">
          <div class="coder-box" v-for="(owners, coderId) in feedbacks">
            <h1>
              <b><coder :id="coderId"></coder></b>
            </h1>

            <ul>
              <li v-for="(feedback, ownerId) in owners">
                <router-link :to="`/coders/${coderId}/feedback/show/${ownerId}`">
                  <owner :id="ownerId"></owner> <span class="icon"><i class="fa fa-link" aria-hidden="true"></i></span>
                </router-link>
              </li>
            </ul>

          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Coder from '@/components/admin/User'
import Owner from '@/components/admin/Owner'

export default {
  name: 'AdminFeedabck',
  data () {
    return {
      success: false
    }
  },
  computed: {
    ...mapState([
      'feedbacks',
      'fetchingData',
      'error'
    ])
  },
  methods: {
    ...mapActions([
      'fetchAllFeedbacks'
    ])
  },
  created () {
    this.fetchAllFeedbacks()
  },
  components: {
    Coder, Owner
  }
}
</script>

<style lang="scss" scoped>
.coder-box {
  margin-bottom: 1rem;
}
</style>
