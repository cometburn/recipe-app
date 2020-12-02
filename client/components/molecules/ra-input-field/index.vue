<template>
  <div class="ra-input__field">
    <label :for="id" class="ra-input__label">
      <slot />
    </label>
    <ra-input
      :id="id"
      :type="type"
      :name="name"
      :placeholder="placeholder"
      :disabled="disabled"
      :required="required"
    />
  </div>
</template>

<script>
import RaInputField from './input-field'

export default RaInputField
</script>

<style scoped>
.ra-input__field .ra-input__label {
  display: block;
}
</style>
