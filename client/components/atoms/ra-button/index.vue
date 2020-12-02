<template>
  <v-btn
    :name="name"
    :type="type"
    :color="color"
    :block="block"
    class="ra-button"

  >
    <slot />
  </v-btn>
</template>

<script>
import RaButton from "./button";

export default RaButton;
</script>

<style scoped>
.ra-button {
    padding: 1rem;
}
</style>
