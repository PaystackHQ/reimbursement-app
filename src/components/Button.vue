<template>
  <button :type="type" @click="click" :disabled="disabled || loading">
    <span class="spinner" v-if="loading"></span>
    <slot v-else></slot>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    type: {
      type: String,
      default: "submit"
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    click() {
      this.$emit("click");
    }
  }
};
</script>

<style lang="scss" scoped>
button {
  width: 100%;
  font-size: 1.4rem;
  font-weight: bold;
  border-radius: 4px;
  background: #44b669;
  background: linear-gradient(to bottom, #44b669 0%, #40ad57 100%);
  border: solid 1px #49a861;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
  outline: none;
  color: white;
  transition: all 300ms;
  height: 42px;
  cursor: pointer;
  position: relative;

  @media all and (max-width: 529px) {
    font-size: 1.6rem;
    height: 50px;
  }

  &:focus,
  &:hover {
    outline: none;
    background: #44b66a;
    transition: none;
    color: white;
  }

  &:disabled {
    background-color: #29b263;
    border-color: #29b263;
    opacity: 0.75;
    transition: none;
    pointer-events: none;
    cursor: default;

    &:hover {
      background-color: #29b263;
      border-color: #29b263;
      color: white;
    }
  }

  .spinner {
    @keyframes spinner {
      to {transform: rotate(360deg);}
    }
    &:before {
      content: '';
      box-sizing: border-box;
      position: absolute;
      top: 50%;
      left: 50%;
      width: 15px;
      height: 15px;
      margin-top: -7.5px;
      margin-left: -7.5px;
      border-radius: 50%;
      border: 1px solid white;
      border-top-color: transparent;
      animation: spinner .6s linear infinite;
    }
  }
}
</style>
