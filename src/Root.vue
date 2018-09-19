<template>
  <router-view />
</template>

<script>
export default {
  name: 'root',
};
</script>

<style lang="scss">
@import './styles/main.scss';

.page {
  background: $bg;
  height: 100%;
  width: 100%;
  overflow:auto;
}
</style>
