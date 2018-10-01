<template>
  <div class="avatar" :style="`background-image: url(${src})`" :class="{ 'avatar--rounded': circle, 'avatar--lg': lg }">
    <span v-if="name && !src">{{ displayName }}</span>
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
    lg: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    displayName() {
      const splitName = this.name.split(' ');
      if (splitName.length > 1) {
        const firstItem = splitName[0];
        const secondItem = splitName[1];
        return `${firstItem[0]}${secondItem[0]}`.toUpperCase();
      }

      const item = splitName[0];
      return `${item[0]}${item[1]}`.toUpperCase();
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

  &--lg {
    height: 72px;
    width: 72px;
  }
}
</style>