<template>
  <section id="coders">
    <div class="field is-horizontal filter" v-if="!fetchingData">
      <div class="field-label is-normal">
        <label class="label">Filtrar por nombre</label>
      </div>
      <div class="field-body">
        <div class="field">
          <div class="control">
            <input v-model="filter" class="input" type="text" placeholder="Nombre">
          </div>
        </div>
      </div>
    </div>

    <div class="columns is-multiline">
      <div class="column is-3" v-for="(coder, index) in codersProfiles">
        <coder-card :key="coder.id" :coder="coder">
        </coder-card>
      </div>
    </div>

    <div class="loading" v-if="fetchingData">
      <a class="button is-danger is-large is-loading">Loading</a>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import CoderCard from '@/components/CoderCard'

export default {
  name: 'home-view',
  components: { CoderCard },
  data () {
    return {
      filter: ''
    }
  },
  computed: {
    ...mapState([
      'coders',
      'fetchingData',
      'error'
    ]),
    codersProfiles () {
      if (this.coders) {
        if (this.filter.length) {
          let result = {}
          for (var key in this.coders) {
            if (this.coders[key].fullname.toLowerCase().indexOf(this.filter.toLowerCase()) >= 0) {
              result[key] = this.coders[key]
            }
          }
          return result
        } else {
          return this.coders
        }
      } else {
        return []
      }
    }
  },
  methods: {
    ...mapActions([
      'fetchCoders'
    ])
  },
  created () {
    this.fetchCoders()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.loading {
  text-align: center;
  margin-top: 1.5rem;
}

.field.filter {
  margin-bottom: 1.5rem;
}

.field-body {
  flex-grow: 1;
}
</style>
