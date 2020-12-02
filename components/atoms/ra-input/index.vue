<template>
  <input
    :id="id"
    :type="type"
    :name="name"
    class="ra-input"
    :placeholder="placeholder"
    :disabled="disabled"
    :required="required"
    @input="$emit('input', $event.target.value)"
  >
</template>

<script>
import RaInput from './input'

export default RaInput
</script>

<style scoped>
.ra-input {
  border: 1px solid #AAAAAA;
}
</style>
