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
              <div class="request-item__price">{{ naira(request.amount) }}</div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <div class="request">
      <div class="request__placeholder">
        <p class="text-muted">No requests selected</p>
      </div>
      <router-view />
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import Avatar from '@/components/Avatar.vue';
import requests from '@/mockData/requests';

export default {
  name: 'RequestList',
  mounted() {
    console.log(this.$route);
  },
  components: {
    Avatar,
  },
  data() {
    return {
      requests,
    };
  },
  methods: {
    fullName(user) {
      return `${user.firstName} ${user.lastName}`;
    },
    timeAgo(date) {
      return moment(date).calendar(null, {
        sameDay: 'Today',
        lastDay: 'Yesterday',
        lastWeek: 'Last ddd',
        sameElse: "MMM Do, 'YY",
      });
    },
    naira(amount) {
      return `N${amount.toLocaleString('en-US', { minimumFractionDigits: 0 })}`;
    },
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