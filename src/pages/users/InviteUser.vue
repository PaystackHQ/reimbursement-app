<template>
  <modal :visible="visible" :width="500" @close="handleClose()">
    <div slot="header" class="card__header">Invite User</div>
    <form class="form">
      <div class="form__group">
        <label class="form__label">Email address</label>
        <input type="text" class="input">
      </div>
      <div class="form__group">
        <label class="form__label">Role</label>
        <input type="text" class="input">
      </div>
      <div class="form__actions text-center">
        <button class="button button--sm">Send invite</button>
      </div>
    </form>
  </modal>
</template>

<script>
export default {
  name: 'InviteUser',
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