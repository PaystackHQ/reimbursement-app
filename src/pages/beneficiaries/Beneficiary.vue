<template>
  <div class="page">
    <div class="page-header">
      <router-link tag="button" to="/beneficiaries" class="button button--sm button--muted">
        <span class="icon">&#8592;</span>Back
      </router-link>
    </div>
    <div class="page-body">
      <div class="beneficiary">
        <div class="beneficiary-info">
          <div class="card text-center">
            <div class="beneficiary-info__header">
              <avatar circle lg :name="beneficiary.name" />
            </div>
            <div class="beneficiary-info__body">
              <div class="beneficiary-info__item">
                <div class="beneficiary-info__item-label">Full name</div>
                <div class="beneficiary-info__item-content">{{ beneficiary.name }}</div>
              </div>
              <div class="beneficiary-info__item">
                <div class="beneficiary-info__item-label">Phone</div>
                <div class="beneficiary-info__item-content">{{ beneficiary.phone }}</div>
              </div>
              <div class="beneficiary-info__item">
                <div class="beneficiary-info__item-label">Email</div>
                <div class="beneficiary-info__item-content">{{ beneficiary.email }}</div>
              </div>
              <div class="beneficiary-info__item">
                <div class="beneficiary-info__item-label">Account number</div>
                <div class="beneficiary-info__item-content">{{ beneficiary.accountNumber }}</div>
              </div>
              <div class="beneficiary-info__item">
                <div class="beneficiary-info__item-label">Bank</div>
                <div class="beneficiary-info__item-content">{{ beneficiary.bank }}</div>
              </div>
            </div>
            <div class="beneficiary-info__footer">
              <button class="button button--sm">Edit Beneficiary</button>
            </div>
          </div>
        </div>
        <div class="beneficiary-requests">
          <div class="card">
            <div class="card__header">Recent Requests</div>
            <ul>
              <request-list-item :request="request" v-for="request in requests" :active="false" :key="request.id" :hideAvatar="true" :pad="true" />
            </ul>
            <div class="card__footer text-center" style="border-top: none;">
              <router-link tag="button" to="/requests" class="button button--info button--sm">View all requests</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import beneficiaries from '@/mockData/beneficiaries';
import requests from '@/mockData/requests';

export default {
  name: 'Beneficiary',
  mounted() {
    const id = Number(this.$route.params.id);
    this.beneficiary = beneficiaries.find(b => b.id === id);
  },
  data() {
    return {
      beneficiary: {},
      requests: requests.slice(0, 5),
    };
  },
};
</script>