<template>
  <div class="avatar" :style="`background-image: url(${src})`" :class="{ 'avatar--rounded': circle }">
    <span v-if="name && !src">{{ name[0].toUppercase }}</span>
  </div>
</template>

<script>
export default {
  name: 'Avatar',
  props: {
    src: {
      type: String,
    },
    name: {
      type: String,
    },
    circle: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.avatar {
  font-size: 1.2rem;
  height: 36px;
  width: 36px;
  border-radius: $radius;
  background-color: #0e273d;
  background-size: cover;
  text-align: center;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: white;

  &--rounded {
    border-radius: 100%;
  }
}
</style>