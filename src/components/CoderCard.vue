<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3" v-bind:style="{ 'background-image': 'url(' + coder.photo + ')' }">
      </figure>
    </div>
    <div class="card-content">
      <div class="content">
        <p class="title is-4">{{coder.fullname}}</p>

        <p>
          <a target="_blank" :href="coder.github">
            <span class="icon"><i class="fa fa-github" aria-hidden="true"></i></span> {{coder.githubUser}}
          </a>
        </p>

        <p>
          <a target="_blank" :href="coder.linkedin">
            <span class="icon"><i class="fa fa-linkedin-square" aria-hidden="true"></i></span> {{coder.linkedinUser}}
          </a>
        </p>

        <p>
          <a :href="coder.resume" target="_blank">
            <span class="icon"><i class="fa fa-download" aria-hidden="true"></i></span> Descargar CV
          </a>
        </p>

        <b>Nivel de inglés</b><br />
        <ul>
          <li>
            Escucha: {{coder.listening}}
          </li>
          <li>
            Habla: {{coder.speaking}}
          </li>
          <li>
            Lectura: {{coder.reading}}
          </li>
          <li>
            Escritura: {{coder.writing}}
          </li>
        </ul>

      </div>
    </div>
    <footer class="card-footer">
      <router-link :to="`/coders/${coder.id}/feedback`" class="card-footer-item tooltip" :data-tooltip="`Escribir feedback sobre ${coder.fullname}`">
        <span class="icon"><i class="fa fa-plus" aria-hidden="true"></i></span> Feedback
      </router-link>
      <a v-bind:class="{ active: coderSelected }" v-on:click="markCoder" class="card-footer-item tooltip" :data-tooltip="`Quiero continuar el proceso de selección con ${coder.fullname}`">
        <span class="icon"><i v-bind:class="{ 'fa-star-o': !coderSelected, 'fa-star': coderSelected }" class="fa fa-star" aria-hidden="true"></i></span>
      </a>
    </footer>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { auth } from '@/api/firebase'

export default {
  props: {
    coder: Object
  },
  computed: {
    coderSelected () {
      return this.coder.selected && this.coder.selected[auth.currentUser.uid] === true
    }
  },
  methods: {
    ...mapActions([
      'toogleCoderStatus'
    ]),
    markCoder () {
      this.toogleCoderStatus({coder: this.coder.id, owner: auth.currentUser.uid})
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  width: 100%;

  .card-image figure {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  ul {
    margin-top: 0;
  }

  footer .active {
    color: #BC3B69
  }
}
</style>
