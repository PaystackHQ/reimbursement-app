<template>
  <div class="request-content">
    <div class="request-header">
      <div class="request-header__meta">
        <div class="request-header__user">Created by {{ fullName(request.user) }}</div>
        <div class="request-header__date text-muted">{{ dateAndTime(request.createdAt) }}</div>
      </div>
      <div class="request-header__details">
        <div class="request-header__title">{{ request.title }}</div>
        <div class="request-header__amount">{{ naira(request.amount) }}</div>
      </div>
      <div class="request-header__actions">
        <button class="button button--success button--sm" style="margin-right: 10px; width: 150px;">Accept</button>
        <button class="button button--danger button--sm" style="margin-right: 10px; width: 150px;">Decline</button>
      </div>
    </div>
    <div class="request-messages">
      <ul class="messages" v-if="request.messages && request.messages.length">
        <li class="message" v-for="(message, index) in request.messages" :class="{ 'message--sent': index % 2 !== 0 }" :key="message.id">
          <div class="message__meta">
            <div class="message__sender">{{ message.user.firstName }}</div>
            <div class="message__timestamp">{{ dateAndTime(message.createdAt) }}</div>
          </div>
          <div class="message__body">
            {{ message.body }}
          </div>
        </li>
      </ul>
      <div class="empty-messages" v-else>
        <p class="text-muted h4 text-center">No messages yet</p>
      </div>
    </div>
    <div class="request-new-message">
      <button class="button button--info button--sm m-r">+</button>
      <input type="text" class="input input--sm m-r" placeholder="Type your message">
      <button class="button button--sm">Send</button>
    </div>
  </div>
</template>

<script>
import requests from '@/mockData/requests';
import { dateAndTime, naira, fullName } from '@/utilities';

export default {
  name: 'Request',
  created() {
    this.load();
  },
  watch: {
    // eslint-disable-next-line
    '$route.params.id'() {
      this.load();
    },
  },
  data() {
    return {
      request: [],
    };
  },
  methods: {
    load() {
      this.request = requests[this.$route.params.id];
    },
    dateAndTime,
    naira,
    fullName,
  },
};
</script>

<style lang="scss" scoped>
.m-r {
  margin-right: 8px;
}
.input {
  flex-grow: 1;
}
.empty-messages {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

