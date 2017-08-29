<template>
  <section id="coders">
    <div class="columns">
      <div class="column is-3">
        <div class="loading" v-if="fetchersLoading.coder">
          <a class="button is-danger is-large is-loading">Loading</a>
        </div>

        <div v-if="!fetchersLoading.coder">
          <p class="image is-square">
            <img :src="coder.photo">
          </p>

          <br />

          <p>
            Feedback para:<br />
            <b>{{coder.fullname}}</b>
          </p>

          <p>
            Empresa:<br />
            <b><owner :id="ownerId"></owner></b>
          </p>
        </div>
      </div>

      <div class="column is-9">
        <div class="loading" v-if="fetchersLoading.feedback">
          <a class="button is-danger is-large is-loading">Loading</a>
        </div>

        <div v-if="!fetchersLoading.feedback">
          <div class="field">
            <label class="label">Comunicación verbal</label>

            <p class="control">
              <textarea :value="feedback.communication" rows="3" class="textarea" placeholder="Add a comment..." @input="updateFeedback('communication', $event)"></textarea>
            </p>
          </div>

          <div class="field">
            <label class="label">Trabajo en equipo</label>

            <p class="control">
              <textarea :value="feedback.teamWork" rows="3" class="textarea" placeholder="Add a comment..." @input="updateFeedback('teamWork', $event)"></textarea>
            </p>
          </div>

          <div class="field">
            <label class="label">Rol de interés</label>

            <p class="control">
              <textarea :value="feedback.role" rows="3" class="textarea" placeholder="Add a comment..." @input="updateFeedback('role', $event)"></textarea>
            </p>
          </div>

          <div class="field">
            <label class="label">Conocimientos técnicos</label>

            <p class="control">
              <textarea :value="feedback.techKnowledge" rows="3" class="textarea" placeholder="Add a comment..." @input="updateFeedback('techKnowledge', $event)"></textarea>
            </p>
          </div>

          <div class="field">
            <label class="label">Idiomas</label>

            <p class="control">
              <textarea :value="feedback.languages" rows="3" class="textarea" placeholder="Add a comment..." @input="updateFeedback('languages', $event)"></textarea>
            </p>
          </div>

          <div class="field">
            <label class="checkbox">
              <input v-model="coderSelected" type="checkbox" @change="markCoder" :disabled="showOnly">
              Me gustaría continuar el proceso de selección con {{coder.fullname}}
            </label>
          </div>

          <div class="notification is-success" v-if="success === true">
            <button class="delete" v-on:click="success = false"></button>
            Feedback guardado
          </div>

          <div class="field is-grouped" v-if="!showOnly">
            <div class="control">
              <a v-on:click="saveFeedback" class="button is-info">Guardar</a>
            </div>
            <div class="control">
              <router-link to="/coders" class="button is-link">Volver</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { auth } from '@/api/firebase'
import Owner from '@/components/admin/Owner'

export default {
  name: 'CoderFeedabck',
  data () {
    return {
      success: false
    }
  },
  computed: {
    ...mapState([
      'coder',
      'feedback',
      'fetchersLoading',
      'error'
    ]),
    coderSelected () {
      return this.coder && this.coder.selected && this.coder.selected[auth.currentUser.uid] === true
    },
    showOnly () {
      return !!this.$route.params.owner
    },
    ownerId () {
      return this.$route.params.owner || auth.currentUser.uid
    }
  },
  methods: {
    ...mapActions([
      'fetchFeedback',
      'fetchCoder',
      'addFeedback',
      'toogleCoderStatus'
    ]),
    saveFeedback () {
      this.addFeedback({coder: this.$route.params.id, owner: auth.currentUser.uid, feedback: this.feedback}).then(() => (this.success = true))
    },
    markCoder () {
      this.toogleCoderStatus({coder: this.coder.id, owner: auth.currentUser.uid})
    },
    updateFeedback (property, e) {
      this.$store.commit('updateFeedback', {
        ...this.feedback,
        ...{[property]: e.target.value}
      })
    }
  },
  created () {
    this.fetchCoder({coder: this.$route.params.id})
    this.fetchFeedback({coder: this.$route.params.id, owner: this.$route.params.owner || auth.currentUser.uid})
  },
  components: {
    Owner
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
