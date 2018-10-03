<template>
  <modal :visible="visible" :width="500" @close="handleClose()">
    <div slot="header" class="card__header">New Request</div>
    <form class="form">
      <div class="form__group">
        <label class="form__label">Amount</label>
        <input type="text" class="input">
      </div>
      <div class="form__group">
      <label class="form__label">Description</label>
        <textarea class="input" />
      </div>
      <div class="form__group">
        <label class="form__label">Beneficiary</label>
        <input type="phone" class="input">
      </div>
      <div class="form__group">
        <label class="form__label">Category</label>
        <input type="text" class="input">
      </div>
      <div class="form__group">
        <label class="form__label">Attachments</label>
        <input type="text" class="input">
      </div>
      <div class="form__actions text-center">
        <button class="button button--sm">Send request</button>
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
