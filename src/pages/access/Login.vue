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
        <base-button type="button" @click="login">Login</base-button>
        <router-link to="/forgot-password" class="form__action form__action--alt">Forgot Password?</router-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  methods: {
    login() {
      localStorage.setItem('isLoggedIn', true);
      this.$router.push('/requests');
    },
  },
};
</script>
