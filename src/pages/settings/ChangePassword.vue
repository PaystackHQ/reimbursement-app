<template>
  <modal :visible="visible" :width="500" @close="handleClose()">
    <div slot="header" class="card__header">Change Password</div>
    <form class="form">
      <div class="form__group">
        <label class="form__label">Old Password</label>
        <input type="text" class="input">
      </div>
      <div class="form__group">
        <label class="form__label">New Password</label>
        <input type="text" class="input">
      </div>
      <div class="form__group">
        <label class="form__label">Confirm New Password</label>
        <input type="text" class="input">
      </div>
      <div class="form__actions text-center">
        <button class="button button--sm">Change password</button>
      </div>
    </form>
  </modal>
</template>

<script>
export default {
  name: 'ChangePassword',
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

<style scoped>
</style>