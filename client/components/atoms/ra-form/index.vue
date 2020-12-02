<template>
  <form
    :id="id"
    :name="name"
    :action="action"
    :method="method"
    @submit="submit"
  >
    <slot />
  </form>
</template>

<script>
import RaForm from './form'

export default RaForm
</script>
