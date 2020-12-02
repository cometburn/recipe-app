<template>
  <button
    :name="name"
    :type="type"
    class="ra-button"
  >
    <slot />
  </button>
</template>

<script>
import RaButton from './button'

export default RaButton
</script>

<style scoped>
.ra-button {
  background-color: green;
  color: #FFFFFF;
  padding: 1rem;
}
</style>
