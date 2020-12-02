<template>
  <ra-form id="login" name="login" @submit="authenticate">
    <ra-input-field
      id="email"
      type="email"
      name="email"
      placeholder="Enter email address"
    >
      Email Address
    </ra-input-field>

    <ra-input-field
      id="password"
      type="password"
      name="password"
      placeholder="Enter password"
    >
      Password
    </ra-input-field>
    <ra-button name="submit">
      Login
    </ra-button>
  </ra-form>
</template>

<script>
import RaLoginCard from './login-card'

export default RaLoginCard
</script>
