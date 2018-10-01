<template>
  <div class="page">
    <form class="form form--login">
      <h1 class="h3 form__title text-center font-bold">Welcome back</h1>
      <div class="form__group">
        <input type="email" placeholder="Email address" class="input">
      </div>
      <div class="form__group">
        <input type="password" placeholder="Password" class="input">
      </div>
      <div class="form__actions">
        <base-button type="submit">Login</base-button>
        <router-link to="/forgot-password" class="form-action form-action--alt">Forgot Password?</router-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
};
</script>
