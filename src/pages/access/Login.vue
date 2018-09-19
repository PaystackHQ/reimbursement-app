<template>
  <div class="page">
    <form class="login-form">
      <h1 class="h3 text-center font-semibold">Login</h1>
      <div class="form-group">
        <input type="email" class="form-input">
      </div>
      <div class="form-group">
        <input type="password" class="form-input">
      </div>
      <div class="form-action">
        <base-button type="submit">Login</base-button>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
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
</style>
