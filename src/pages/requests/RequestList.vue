<template>
  <div class="page">
    <div class="request-list">
      <div class="request-list-header"></div>
      <div class="request-list-items">
        <router-link tag="div" class="request-item" :class="{ active: $route.params.id == request.id }"
          v-for="request in requests" :to="`/requests/${request.id}`"  :key="request.id">
          <div class="request-item__inner">
            <avatar style="height: 64px; width: 64px;" :name="fullName(request.user)" />
            <div class="request-item__details">
              <div class="request-item__name">{{ fullName(request.user) }}</div>
              <div class="request-item__description">{{ request.title }}</div>
            </div>
            <div class="request-item__meta">
              <div class="request-item__date">{{ timeAgo(request.createdAt) }}</div>
              <div class="request-item__amount">{{ naira(request.amount) }}</div>
            </div>
          </div>
        </router-link>
      </div>
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
import { fullName, timeAgo, naira } from '@/utilities';

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
  methods: {
    fullName,
    timeAgo,
    naira,
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