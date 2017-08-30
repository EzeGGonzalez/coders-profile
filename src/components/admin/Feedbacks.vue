<template>
  <section id="coders">
    <div class="columns is-multiline">
      <div class="column is-4" v-for="(feedbacksByCompany, keyCoder) in feedbacks">
        <div class="box">
          <article class="media">
            <div class="media-left">
              <figure class="image is-64x64">
                <coder-image :id="keyCoder"></coder-image>
              </figure>
            </div>
            <div class="media-content">
              <div class="content">
                <p>
                  <strong><coder :id="keyCoder"></coder></strong>
                  <br>
                  <div class="columns">
                    <div class="column is-narrow" v-for="(feedback, keyOwner) in feedbacksByCompany">
                      <router-link :to="`/coders/${keyCoder}/feedback/show/${keyOwner}`">
                        <span class="tag is-info"><owner :id="keyOwner"></owner></span>
                      </router-link>
                    </div>
                  </div>
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Owner from '@/components/admin/Owner'
import Coder from '@/components/admin/Coder'
import CoderImage from '@/components/admin/CoderImage'

export default {
  name: 'AdminFeedabck',
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
    Owner,
    Coder,
    CoderImage
  }
}
</script>

<style lang="scss" scoped>
</style>
