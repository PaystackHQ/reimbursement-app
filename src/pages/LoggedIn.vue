<template>
  <div class="logged-in">
    <sidebar />
    <div class="main">
      <router-view />
    </div>
  </div>

</template>

<script>
export default {
  name: 'LoggedIn',
};
</script>

<style lang="scss" scoped>
.logged-in {
  height: 100%;
  max-height: 100vh;
  display: flex;
  flex-flow: row nowrap;
}

.main {
  height: 100%;
  flex-grow: 1;
}
</style>

