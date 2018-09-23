<template>
  <div class="page">
    <form class="login-form">
      <h1 class="h3 text-center font-bold">Welcome back</h1>
      <div class="form-group">
        <input type="email" placeholder="Email address" class="input">
      </div>
      <div class="form-group">
        <input type="password" placeholder="Password" class="input">
      </div>
      <div class="form-actions">
        <base-button type="submit">Login</base-button>
        <router-link to="/forgot-password" class="forgot-password">Forgot Password?</router-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
};
</script>

<style lang="scss" scoped>
.login-form {
  width: 300px;
  margin: 150px auto 0;
}

img {
  height: 30px;
  margin: 20px auto;
}

h1 {
  margin-bottom: 25px;
}

.form-actions {
  margin-top: 15px;
}

.forgot-password {
  text-align: center;
  display: block;
  margin-top: 20px;
  color: $textMuted;
  transition: all 300ms;
  font-size: 1.4rem;

  &:hover {
    color: $textPrimary;
  }
}
</style>
