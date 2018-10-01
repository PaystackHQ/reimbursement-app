<template>
  <router-link tag="li" class="request-item" :class="{ active, pad }" :to="`/requests/${request.id}`" :key="request.id">
    <div class="request-item__inner">
      <avatar v-if="!hideAvatar" style="height: 64px; width: 64px;" :name="fullName(request.user)" />
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
</template>

<script>
import { fullName, timeAgo, naira } from '@/utilities';

export default {
  name: 'RequestListItem',
  props: {
    request: {
      type: Object,
    },
    active: {
      type: Boolean,
      default: false,
    },
    hideAvatar: {
      type: Boolean,
      default: false,
    },
    pad: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    fullName,
    timeAgo,
    naira,
  },
};
</script>