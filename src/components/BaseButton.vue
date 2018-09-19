<template>
  <button :type="type" @click="click" :disabled="disabled || loading" class="button">
    <span class="spinner" v-if="loading"></span>
    <slot v-else></slot>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    type: {
      type: String,
      default: 'submit',
    },
    loading: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    click() {
      this.$emit('click');
    },
  },
};
</script>
