<template>
  <v-text-field
    :id="id"
    :type="type"
    :name="name"
    class="ra-input mt-0 pt-0"
    :placeholder="placeholder"
    :disabled="disabled"
    :required="required"
    autocomplete=""
    block
  ></v-text-field>
</template>

<script>
import RaInput from "./input";

export default RaInput;
</script>

<style scoped>
.ra-input {
    /* border: 1px solid #aaaaaa; */
}
</style>
