<template>
  <div class="ra-login__page">
    <h1>Login Form</h1>
    <ra-login-card @submit="authenticate" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import RaLoginCard from '~/components/organisms/ra-login-card/index.vue'

export default Vue.extend({
  name: 'LoginPage',
  components: {
    RaLoginCard
  },
  methods: {
    authenticate (): void {
      // TODO
    }
  }
})
</script>
