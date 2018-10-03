<template>
  <transition name="modal">
    <div v-if="visible" class="modal" role="alertdialog">
      <div class="modal-overlay" @click="handleOverlayClick"></div>
      <div class="modal-content" role="document" :style="`width: ${width}px`">
        <div class="card">
          <slot name="header" />
          <div class="card__body">
            <slot />
          </div>
          <slot name="footer" />
        </div>
        <div class="modal-close" @click="close()" v-if="showCloseButton"></div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    visible: {
      type: Boolean,
      default: true,
    },
    showCloseButton: {
      type: Boolean,
      default: false,
    },
    width: {
      type: Number,
      default: 450,
    },
    disableOutsideClick: {
      type: Boolean,
      default: false,
    },
    closeOnEscape: {
      type: Boolean,
      default: true,
    },
  },
  watch: {
    visible(newValue) {
      if (newValue) {
        document.addEventListener('keyup', this.handleEvent);
      } else {
        document.removeEventListener('keyup', this.handleEvent);
      }
    },
  },
  methods: {
    close() {
      this.$emit('close');
    },
    handleEvent(e) {
      if (e.code === 'Escape' && this.closeOnEscape) this.close();
    },
    handleOverlayClick() {
      if (!this.disableOutsideClick) this.close();
    },
  },
};
</script>
