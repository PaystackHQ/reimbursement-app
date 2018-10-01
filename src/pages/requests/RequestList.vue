<template>
  <div class="page">
    <div class="request-list">
      <div class="request-list-header"></div>
      <ul class="request-list-items">
        <request-list-item v-for="request in requests" :key="request.id" :request="request" :active="$route.params.id === request.id" />
      </ul>
    </div>
    <div class="request">
      <div class="request-placeholder">
        <p class="text-muted">No requests selected</p>
      </div>
      <router-view />
    </div>
  </div>
</template>

<script>
import Avatar from '@/components/Avatar.vue';
import requests from '@/mockData/requests';

export default {
  name: 'RequestList',
  components: {
    Avatar,
  },
  data() {
    return {
      requests,
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