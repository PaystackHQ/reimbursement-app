<template>
  <div class="page">
    <div class="request-list">
      <div class="page-header">
        <div class="page-header__filter">
          <button class="button button--sm button--muted">Filter Requests</button>
        </div>
        <div class="page-header__action">
          <button class="button button--sm" @click="showNewRequestForm = true">New Request</button>
        </div>
      </div>
      <ul class="page-body">
        <request-list-item v-for="request in requests" :key="request.id" :request="request" :active="$route.params.id === request.id" />
      </ul>
    </div>
    <div class="request">
      <div class="request-placeholder">
        <p class="text-muted">No requests selected</p>
      </div>
      <router-view />
    </div>
    <new-request :visible="showNewRequestForm" @close="showNewRequestForm = false" />
  </div>
</template>

<script>
import requests from '@/mockData/requests';
import NewRequest from './NewRequest.vue';

export default {
  name: 'RequestList',
  components: {
    NewRequest,
  },
  data() {
    return {
      requests,
      showNewRequestForm: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.page {
  display: flex;
  height: 100%;
  overflow: hidden;
}
</style>