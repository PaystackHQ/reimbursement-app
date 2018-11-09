<template>
  <div class="page">
    <div class="page-header"></div>
    <div class="page-body">
      <div class="settings">
        <div class="account-info">
          <div class="card">
            <div class="card__header">Account info</div>
            <div class="card__body">
              <form class="form">
                <div class="form__group">
                  <label class="form__label">Full name</label>
                  <input type="text" class="input">
                </div>
                <div class="form__group">
                  <label class="form__label">Email address</label>
                  <input type="email" class="input">
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
                  <button class="button button--sm">Save changes</button>
                </div>
              </form>
            </div>
            <div class="card__footer text-center">
              <button class="button button--sm button--info" @click="showChangePasswordModal = true">Change password</button>
            </div>
          </div>
        </div>
        <div class="profile-picture">
          <div class="card">
            <div class="card__header">Profile Photo</div>
            <div class="card__body text-center">
              <avatar circle style="height: 96px; width: 96px;" />
              <div class="profile-picture__text">
                <h2 class="h2 profile-picture__title">Upload Instructions</h2>
                <p class="text-secondary profile-picture__description">Must be at least 128px by 128px and smaller than 512KB. Image will be displayed on Paystack in the same scale as above.</p>
              </div>
            </div>
            <div class="card__footer text-center">
              <button class="button button--sm">Upload Photo</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <change-password :visible="showChangePasswordModal" @close="showChangePasswordModal = false" />
  </div>
</template>

<script>
import beneficiaries from '@/mockData/beneficiaries';
import requests from '@/mockData/requests';
import ChangePassword from './ChangePassword.vue';

export default {
  name: 'Settings',
  components: {
    ChangePassword,
  },
  mounted() {
    const id = Number(this.$route.params.id);
    this.beneficiary = beneficiaries.find(b => b.id === id);
  },
  data() {
    return {
      beneficiary: {},
      requests: requests.slice(0, 5),
      showChangePasswordModal: false,
    };
  },
};
</script>
