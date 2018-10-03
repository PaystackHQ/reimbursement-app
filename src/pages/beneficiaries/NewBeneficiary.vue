<template>
  <modal :visible="visible" :width="500" @close="handleClose()">
    <div slot="header" class="card__header">New Request</div>
    <form class="form">
      <div class="form__group">
        <label class="form__label">Name</label>
        <input type="text" class="input">
      </div>
      <div class="form__group">
      <label class="form__label">Email address</label>
        <input type="text" class="input">
      </div>
      <div class="form__group">
        <label class="form__label">Phone number</label>
        <input type="phone" class="input">
      </div>
      <div class="form__group">
        <label class="form__label">Bank</label>
        <input type="text" class="input">
      </div>
      <div class="form__group">
        <label class="form__label">Account number</label>
        <input type="text" class="input">
      </div>
      <div class="form__actions text-center">
        <button class="button button--sm">Save beneficiary</button>
      </div>
    </form>
  </modal>
</template>

<script>
export default {
  name: 'NewRequest',
  props: {
    visible: {
      type: Boolean,
    },
  },
  methods: {
    handleClose() {
      this.$emit('close');
    },
  },
};
</script>
